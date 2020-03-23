import { Input } from '@angular/core';
import { ImageReference } from 'src/app/interfaces/image-reference';

export abstract class ImageComponent implements ImageReference {
  @Input() public src: string;
  @Input() public alt: string;

  public constructor() {
    this.src = "";
    this.alt = "";
  }
}