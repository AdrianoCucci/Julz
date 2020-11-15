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
  private _galleryRows: GallaryRow[];

  @ViewChild(ImageModalComponent, { static: true }) public imageModal: ImageModalComponent;

  public constructor(title: Title, meta: Meta) {
    super(title, meta);

    this._title.setTitle("Gallery");
    this.setMetaDescription("Check out these fun photos of Jules. With new music on the way, new images will be updated and added to this gallery.");
    this.setGallaryImages();
  }

  private setGallaryImages() {
    this._galleryRows = [
      {
        rowImages: [
          { src: "assets/images/photos/gallery/laying-with-phone-2.jpg", alt: "person-laying-with-phone", },
          { src: "assets/images/photos/gallery/sitting-with-phone-5.jpg", alt: "person-sitting-with-phone", },
          { src: "assets/images/photos/gallery/sitting-with-phone-4.jpg", alt: "person-sitting-with-phone", }
        ]
      },
      {
        rowImages: [
          { src: "assets/images/photos/gallery/laying-with-phone-3.jpg", alt: "person-laying-with-phone", },
          { src: "assets/images/photos/gallery/holding-mirror.jpg", alt: "person-holding-mirror", },
          { src: "assets/images/photos/gallery/standing-with-glitter-2.jpeg", alt: "person-standing-with-glitter-background", }
        ]
      },
      {
        rowImages: [
          { src: "assets/images/photos/gallery/standing-with-glitter-4.jpeg", alt: "person-standing-with-glitter-background", },
          { src: "assets/images/photos/gallery/sitting-with-phone-2.jpg", alt: "person-sitting-with-phone", },
          { src: "assets/images/photos/gallery/laying-with-phone-1.jpg", alt: "person-laying-with-phone", }
        ]
      },
      {
        rowImages: [
          { src: "assets/images/photos/gallery/standing-with-phone-3.jpg", alt: "person-standing-with-phone", },
          { src: "assets/images/photos/gallery/looking-away-1.jpg", alt: "person-looking-away", },
          { src: "assets/images/photos/gallery/standing-with-phone-2.jpg", alt: "person-standing-with-phone", }
        ]
      },
      {
        rowImages: [
          { src: "assets/images/photos/gallery/talking-on-phone-1.jpg", alt: "person-talking-on-phone", },
          { src: "assets/images/photos/gallery/sitting-with-phone-1.jpg", alt: "person-sitting-with-phone", },
          { src: "assets/images/photos/gallery/holding-phone-cord.jpg", alt: "person-holding-phone-cord", }
        ]
      },
      {
        rowImages: [
          { src: "assets/images/photos/gallery/talking-on-phone-2.jpg", alt: "person-talking-on-phone", },
          { src: "assets/images/photos/gallery/sitting-1.jpg", alt: "person-sitting", },
          { src: "assets/images/photos/gallery/standing-with-phone-1.jpg", alt: "person-standing-with-phone", }
        ]
      },
      {
        rowImages: [
          { src: "assets/images/photos/gallery/standing-with-glitter-1.jpeg", alt: "person-standing-with-glitter-background", },
          { src: "assets/images/photos/gallery/sitting-2.jpg", alt: "person-sitting", },
          { src: "assets/images/photos/gallery/standing-with-glitter-3.jpeg", alt: "person-standing-with-glitter-background", },
        ]
      },
      {
        rowImages: [
          { src: "assets/images/photos/gallery/looking-away-2.jpg", alt: "person-looking-away", },
          { src: "assets/images/photos/gallery/standing-with-glitter-5.jpg", alt: "person-standing-with-glitter-background", },
          { src: "assets/images/photos/gallery/looking-in-mirror.jpg", alt: "person-looking-in-mirror", },
        ]
      },
      {
        rowImages: [
          { src: "assets/images/photos/gallery/posing-with-phone.jpg", alt: "person-posing-with-phone", },
          { src: "assets/images/photos/gallery/sitting-with-phone-3.jpg", alt: "person-sitting-with-phone", }
        ]
      }
    ];
  }

  public get galleryRows(): GallaryRow[] {
    return this._galleryRows;
  }
}

interface GallaryRow {
  rowImages: ImageContent[];
}