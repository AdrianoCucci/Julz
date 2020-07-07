import { Component } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-music-page',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss']
})
export class MusicPage extends Page {
  public constructor(title: Title, meta: Meta) {
    super(title, meta);

    this._title.setTitle("Music");
    this.setMetaDescription("Stream Jules' first single, \"Don't Wanna Be\", available now on all streaming platforms. Links can be found here! New music is dropping from Jules very soon!");
  }
}
