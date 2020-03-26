import { Component } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage extends Page  {
  public constructor(title: Title, meta: Meta) {
    super(title, meta);
    this._title.setTitle("About");
  }
}
