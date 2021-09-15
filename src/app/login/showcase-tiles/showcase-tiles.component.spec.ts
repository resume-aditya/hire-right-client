import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseTilesComponent } from './showcase-tiles.component';

describe('ShowcaseTilesComponent', () => {
  let component: ShowcaseTilesComponent;
  let fixture: ComponentFixture<ShowcaseTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
