import { Component } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss']
})
export class GalleryPage extends Page {
  public constructor(title: Title, meta: Meta) {
    super(title, meta);
    this._title.setTitle("Gallery");
  }
}
