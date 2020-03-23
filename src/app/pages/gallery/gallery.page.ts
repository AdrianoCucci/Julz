import { Component, ViewChild } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { ImageModalComponent } from 'src/app/components/images/image-modal/image-modal.component';
import { ImageReference } from 'src/app/interfaces/image-reference';
import gallaryRowsJson from 'src/assets/data/gallery-images.json';

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

    this.gallaryRows = gallaryRowsJson;
  }
}

interface GallaryRow {
  images: ImageReference[];
}