import { Component, AfterViewInit, QueryList, ContentChildren, Input, HostListener } from '@angular/core';
import { CarouselImageComponent } from '../carousel-image/carousel-image.component';
import { IconDefinition, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements AfterViewInit {
  @Input() public arrows: boolean;

  public readonly buttonIcon: IconDefinition;

  @ContentChildren(CarouselImageComponent) private _imagesQuery: QueryList<CarouselImageComponent>;

  private _carouselImages: CarouselImageComponent[];
  private _activeIndex: number;

  private _autoScroll: boolean;
  private _allowAutoScroll: boolean;
  private _scrollInterval: NodeJS.Timeout;

  public constructor() {
    this._activeIndex = 0;
    this.arrows = true;
    this.buttonIcon = faChevronLeft;
  }

  ngAfterViewInit() {
    this._carouselImages = this._imagesQuery.toArray();

    if(this._carouselImages.length > 0) {
      setTimeout(() => {
        this._carouselImages[0].animateIn("left")

        if(this._carouselImages.length < 2) {
          this.arrows = false;
        }
      }, 1);
    }
  }

  public nextImage(disableAutoScroll: boolean = true) {
    const imagesLength: number = this._carouselImages.length;

    if(imagesLength > 1) {
      this._carouselImages[this._activeIndex].animateOut("left");

      ++this._activeIndex;
      if(this._activeIndex >= imagesLength) {
        this._activeIndex = 0;
      }

      this._carouselImages[this._activeIndex].animateIn("left");
    }

    this._allowAutoScroll = !disableAutoScroll;
  }

  public prevImage(disableAutoScroll: boolean = true) {
    const imagesLength: number = this._carouselImages.length;

    if(imagesLength > 1) {
      this._carouselImages[this._activeIndex].animateOut("right");

      --this._activeIndex;
      if(this._activeIndex < 0) {
        this._activeIndex = imagesLength - 1;
      }

      this._carouselImages[this._activeIndex].animateIn("right");
    }

    this._allowAutoScroll = !disableAutoScroll;
  }

  @HostListener("mouseleave") private mouseLeave() {
    this._allowAutoScroll = true;
  }

  public get autoScroll(): boolean {
    return this._autoScroll;
  }
  @Input() public set autoScroll(value: boolean) {
    console.log(value);
    this._autoScroll = value;
    this._allowAutoScroll = value;

    if(value) {
      this._scrollInterval = setInterval(() => {
        if(this._allowAutoScroll) {
          this.nextImage(false);
        }
      }, 5000);
    }
    else {
      clearInterval(this._scrollInterval);
    }
  }
}
