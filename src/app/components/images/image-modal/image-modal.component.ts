import { Component, HostBinding, HostListener } from '@angular/core';
import { ImageComponent } from '../image-component';
import { ImageReference } from 'src/app/interfaces/image-reference';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent extends ImageComponent {
  @HostBinding("class.visible") private _visible: boolean;

  public show(imageReference?: ImageReference) {
    if(imageReference) {
      this.src = imageReference.src;
      this.alt = imageReference.alt;
    }
    this._visible = true;
  }

  @HostListener("click") public hide() {
    this._visible = false;
  }
}
