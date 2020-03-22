import { Component } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss']
})
export class VideosPage extends Page {
  public constructor(title: Title, meta: Meta) {
    super(title, meta);
    this._title.setTitle("Videos");
  }
}
