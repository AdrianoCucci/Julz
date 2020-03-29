import { Component, ViewChild } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { ImageModalComponent } from 'src/app/components/images/image-modal/image-modal.component';
import { ImageContent } from 'src/app/interfaces/image-content';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss']
})
export class GalleryPage extends Page {
  public readonly gallaryRows: GallaryRow[];

  @ViewChild(ImageModalComponent, { static: true }) public imageModal: ImageModalComponent;

  public constructor(title: Title, meta: Meta) {
    super(title, meta);
    this._title.setTitle("Gallery");

    this.gallaryRows = [
      {
        rowImages: [
          {
            src: "assets/images/photos/gallery/looking-away-2.jpg",
            alt: "person-looking-away",
          },
          {
            src: "assets/images/photos/gallery/posing-1.jpg",
            alt: "person-posing",
          },
        ]
      },
      {
        rowImages: [
          {
            src: "assets/images/photos/gallery/looking-away-1.jpg",
            alt: "person-looking-away",
          },
          {
            src: "assets/images/photos/gallery/posing-2.jpg",
            alt: "person-posing",
          },
        ]
      },
      {
        rowImages: [
          {
            src: "assets/images/photos/gallery/holding-mirror.jpg",
            alt: "person-holding-mirror",
          }
        ]
      }
    ];
  }
}

interface GallaryRow {
  rowImages: ImageContent[];
}