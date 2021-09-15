import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-tiles',
  templateUrl: './showcase-tiles.component.html',
  styleUrls: ['./showcase-tiles.component.less']
})
export class ShowcaseTilesComponent implements OnInit {

  @Input() title: String;
  @Input() content: String;
  @Input()
  get icon():String { return this._icon;}
  set icon(name: String) { this._icon = `\\assets\\login\\${name}`;}
  private _icon;
  constructor() { }

  ngOnInit(): void {
  }

}
