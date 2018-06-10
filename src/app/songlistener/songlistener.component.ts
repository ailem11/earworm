import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song';
@Component({
  selector: 'app-songlistener',
  templateUrl: './songlistener.component.html',
  styleUrls: ['./songlistener.component.css']

})
export class SonglistenerComponent implements OnInit {
  song:Song = {
    id: 1,
    lyrics: 'On top the world',
    show: false
  }
  @Input() showflag: boolean;
  constructor() { }

  ngOnInit() {
  }
}
