import { Component, HostBinding, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ImageComponent } from '../image-component';
import { ImageReference } from 'src/app/interfaces/image-reference';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent extends ImageComponent {
  @HostBinding("class") private _class: string;

  public show(imageReference?: ImageReference) {
    if(imageReference) {
      this.src = imageReference.src;
      this.alt = imageReference.alt;
    }
    this._class = "visible";
  }

  @HostListener("click") public hide() {
    this._class = "";
  }
}
