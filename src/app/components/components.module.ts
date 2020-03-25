import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './navigation/navigation.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import { SocialMenuComponent } from './menus/social-menu/social-menu.component';
import { MobileMenuComponent } from './menus/mobile-menu/mobile-menu.component';
import { RowComponent } from './layout/row/row.component';
import { AppRoutingModule } from '../app-routing.module';
import { ColumnComponent } from './layout/column/column.component';
import { ImageViewComponent } from './images/image-view/image-view.component';
import { ImageModalComponent } from './images/image-modal/image-modal.component';
import { ImageCarouselComponent } from './images/carousel/image-carousel/image-carousel.component';
import { CarouselImageComponent } from './images/carousel/carousel-image/carousel-image.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TextInputComponent } from './input/text/text-input/text-input.component';
import { TextAreaComponent } from './input/text/text-area/text-area.component';
import { ButtonComponent } from './input/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  NavigationComponent,
  FooterComponent,
  MainMenuComponent,
  SocialMenuComponent,
  MobileMenuComponent,
  RowComponent,
  ColumnComponent,
  ImageViewComponent,
  ImageModalComponent,
  ImageCarouselComponent,
  CarouselImageComponent,
  ContactFormComponent,
  TextInputComponent,
  TextAreaComponent,
  ButtonComponent
];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: components,
  exports: components,
})
export class ComponentsModule { }
