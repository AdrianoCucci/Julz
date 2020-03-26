import { Input } from '@angular/core';
import { ImageContent } from 'src/app/interfaces/image-reference';

export abstract class ImageComponent implements ImageContent {
  @Input() public src: string;
  @Input() public alt: string;
  @Input() public caption?: string;
  @Input() public description?: string;

  public constructor() {
    this.src = "";
    this.alt = "";
  }
}