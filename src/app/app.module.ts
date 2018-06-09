import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SonglistenerComponent } from './songlistener/songlistener.component';

@NgModule({
  declarations: [
    AppComponent,
    SonglistenerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
