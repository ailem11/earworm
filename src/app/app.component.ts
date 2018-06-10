import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'earworm';
  showflag = false;

  listenForSong(event) {
    this.showflag = !this.showflag;
    //Convert speech to text
    //Search for the song associated with the text
    //Return song options
    //Play song on spotify
  }
}
