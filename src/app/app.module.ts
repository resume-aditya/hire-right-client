import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './login/login-header/login-header.component';
import { LoginContentComponent } from './login/login-content/login-content.component';
import { ShowcaseTilesComponent } from './login/showcase-tiles/showcase-tiles.component';
import { HomePanelComponent } from './dashboard/landing/home-panel/home-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    LoginContentComponent,
    ShowcaseTilesComponent,
    HomePanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path : 'login',
      component : LoginContentComponent
    },{
      path : 'home',
      component : HomePanelComponent
    },{
      path : '',
      redirectTo : 'login',
      pathMatch : 'full'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
