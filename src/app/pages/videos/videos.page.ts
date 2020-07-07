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
    this.setMetaDescription("Here you can find awesome content for Jules' new single, \"Don't Wanna Be\". A lyric video and a live virtual performance of the song can also be found on Jules' Youtube channel: (Jules Music Official).");
  }
}
