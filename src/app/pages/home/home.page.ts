import { Component } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { ImageContent } from 'src/app/interfaces/image-reference';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage extends Page {
  public readonly carouselImages: ImageContent[];

  public constructor(title: Title, meta: Meta) {
    super(title, meta);
    this._title.setTitle("Home");

    this.carouselImages = [
      {
        src: "assets/images/placeholder.jpg",
        alt: "placeholder-image"
      },
      {
        src: "assets/images/placeholder.jpg",
        alt: "placeholder-image"
      },
      {
        src: "assets/images/placeholder.jpg",
        alt: "placeholder-image"
      }
    ]
  }
}
