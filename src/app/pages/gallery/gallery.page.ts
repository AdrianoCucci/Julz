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
            src: "assets/images/photos/gallery/laying-with-phone-2.jpg",
            alt: "person-laying-with-phone",
          },
          {
            src: "assets/images/photos/gallery/sitting-with-phone-5.jpg",
            alt: "person-sitting-with-phone",
          },
          {
            src: "assets/images/photos/gallery/sitting-with-phone-4.jpg",
            alt: "person-sitting-with-phone",
          }
        ]
      },
      {
        rowImages: [
          {
            src: "assets/images/photos/gallery/laying-with-phone-3.jpg",
            alt: "person-laying-with-phone",
          },
          {
            src: "assets/images/photos/gallery/holding-mirror.jpg",
            alt: "person-holding-mirror",
          },
          {
            src: "assets/images/photos/gallery/sitting-with-phone-3.jpg",
            alt: "person-sitting-with-phone",
          }
        ]
      },
      {
        rowImages: [
          {
            src: "assets/images/photos/gallery/looking-away-2.jpg",
            alt: "person-looking-away",
          },
          {
            src: "assets/images/photos/gallery/sitting-with-phone-2.jpg",
            alt: "person-sitting-with-phone",
          },
          {
            src: "assets/images/photos/gallery/laying-with-phone-1.jpg",
            alt: "person-laying-with-phone",
          }
        ]
      },
      {
        rowImages: [
          {
            src: "assets/images/photos/gallery/standing-with-phone-3.jpg",
            alt: "person-standing-with-phone",
          },
          {
            src: "assets/images/photos/gallery/looking-away-1.jpg",
            alt: "person-looking-away",
          },
          {
            src: "assets/images/photos/gallery/standing-with-phone-2.jpg",
            alt: "person-standing-with-phone",
          }
        ]
      },
      {
        rowImages: [
          {
            src: "assets/images/photos/gallery/talking-on-phone-1.jpg",
            alt: "person-talking-on-phone",
          },
          {
            src: "assets/images/photos/gallery/sitting-with-phone-1.jpg",
            alt: "person-sitting-with-phone",
          },
          {
            src: "assets/images/photos/gallery/holding-phone-cord.jpg",
            alt: "person-holding-phone-cord",
          }
        ]
      },
      {
        rowImages: [
          {
            src: "assets/images/photos/gallery/posing-with-phone.jpg",
            alt: "person-posing-with-phone",
          },
          {
            src: "assets/images/photos/gallery/talking-on-phone-2.jpg",
            alt: "person-talking-on-phone",
          },
          {
            src: "assets/images/photos/gallery/standing-with-phone-1.jpg",
            alt: "person-standing-with-phone",
          }
        ]
      }
    ];
  }
}

interface GallaryRow {
  rowImages: ImageContent[];
}