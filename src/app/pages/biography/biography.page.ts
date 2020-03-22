import { Component } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-biography-page',
  templateUrl: './biography.page.html',
  styleUrls: ['./biography.page.scss']
})
export class BiographyPage extends Page  {
  public constructor(title: Title, meta: Meta) {
    super(title, meta);
    this._title.setTitle("Biography");
  }
}
