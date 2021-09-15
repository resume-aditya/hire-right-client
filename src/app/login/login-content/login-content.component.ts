import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.less']
})
export class LoginContentComponent implements OnInit {
  tiles = [];
  constructor() { }

  ngOnInit(): void {
    this.createTiles()
  }

  createTiles() {
    class Tile {
      constructor(title:String, content, icon) {
        return {
          title,
          content,
          icon,
        }
      }
    }
    this.tiles.push(new Tile('Track Jobs','Keep track of all the jobs id at single click','job.jpg'));
    this.tiles.push(new Tile('Insights','Generate insights, get instant comparison','insights.jpg'));

    this.tiles.push(new Tile('Track Candidates','Keep track of all the candidates with advance search','candidate.jpg'));
    this.tiles.push(new Tile('Questions','Question bank that will keep on growing','questions.jpg'));
  }
}
