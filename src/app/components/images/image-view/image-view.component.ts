import { Component, HostListener, EventEmitter, Output } from '@angular/core';
import { ImageComponent } from '../image-component';
import { ImageReference } from 'src/app/interfaces/image-reference';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent extends ImageComponent {
  @Output() public readonly onClick: EventEmitter<ImageReference>;

  public constructor() {
    super();
    this.onClick = new EventEmitter<ImageReference>();
  }

  @HostListener("click") private emitOnClick() {
    this.onClick.emit(this);
  }
}
