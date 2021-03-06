import { Component, HostBinding, Input } from '@angular/core';
import { ImageComponent } from '../../image-component';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss']
})
export class CarouselImageComponent extends ImageComponent {
  @Input() @HostBinding("attr.in-animation") public inAnimation: Animation;
  @Input() @HostBinding("attr.out-animation") public outAnimation: Animation;

  @HostBinding("class.active") private _classActive: boolean;
  @HostBinding("class.exiting") private _classExiting: boolean;

  @HostBinding("class.in-l") private _classInL: boolean;
  @HostBinding("class.out-l") private _classOutL: boolean;
  @HostBinding("class.in-r") private _classInR: boolean;
  @HostBinding("class.out-r") private _classOutR: boolean;

  private _exitTimeout: NodeJS.Timeout;

  public constructor() {
    super();
    this.inAnimation = "cut";
    this.outAnimation = "cut";
  }

  public animateIn(value: "left" | "right") {
    this._classActive = true;

    this._classInL = value === "left";
    this._classInR = value === "right";

    this._classOutL = false;
    this._classOutR = false;

    this._classExiting = false;
    clearTimeout(this._exitTimeout);
  }

  public animateOut(value: "left" | "right") {
    this._classActive = false;

    this._classOutL = value === "left";
    this._classOutR = value === "right";

    this._classInL = false;
    this._classInR = false;

    if(this.outAnimation !== "cut") {
      this._classExiting = true;
      this._exitTimeout = setTimeout(() => this._classExiting = false, 1000);
    }
  }
}

type Animation = "cut" | "slide" | "fade" | "layer";