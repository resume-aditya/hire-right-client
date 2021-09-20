import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.less']
})
export class LoginHeaderComponent implements OnInit {

  buttonText: string = 'Sign In';
  username: string;
  password: string;
  userExists: boolean;
  loginTimer;
  stopLogin: boolean = true;
  constructor(private http:HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  usernameChange(): void {
    if (!this.username.trim())
      return;
    clearTimeout(this.loginTimer);
    this.loginTimer = setTimeout(() => {
      this.checkIfUserExists(this.username).subscribe((resp)=>{
        this.userExists = Boolean(resp);
        this.buttonText = resp ? 'Sign In' : 'Sign Up';
        this.stopLogin = false;
      });
    }, 500);
  }
  checkIfUserExists(username) {
    this.stopLogin = true;
    let params = new HttpParams().set("username",username);
    return this.http.get("http://localhost:3000/login/userExists", {
      params : params
    });
  }
  doLogin () {
    let params = new HttpParams().set("username",this.username).set("password",this.password);
    return this.http.get("http://localhost:3000/login/doLogin", {
      params : params
    });
  }
  loginSubmit(): void {
    if (this.userExists) {
      if (this.password) {
        this.doLogin().subscribe((resp) => {
          if (resp) {
            this.router.navigateByUrl('/home');
          } else {
            alert('Under construction : Pls check the password')
          }
        });
      } else {
        //some password handling
      }
    } else {
      alert('some signup')
    }
  }
}
