import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './login/login-header/login-header.component';
import { LoginContentComponent } from './login/login-content/login-content.component';
import { ShowcaseTilesComponent } from './login/showcase-tiles/showcase-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    LoginContentComponent,
    ShowcaseTilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
