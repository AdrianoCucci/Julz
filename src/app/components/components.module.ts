import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import { SocialMenuComponent } from './menus/social-menu/social-menu.component';
import { MobileMenuComponent } from './menus/mobile-menu/mobile-menu.component';
import { RowComponent } from './layout/row/row.component';
import { AppRoutingModule } from '../app-routing.module';
import { ColumnComponent } from './layout/column/column.component';
import { ImageViewComponent } from './images/image-view/image-view.component';
import { ImageModalComponent } from './images/image-modal/image-modal.component';
import { FooterComponent } from './footer/footer.component';

const components = [
  NavigationComponent,
  FooterComponent,
  MainMenuComponent,
  SocialMenuComponent,
  MobileMenuComponent,
  RowComponent,
  ColumnComponent,
  ImageViewComponent,
  ImageModalComponent
];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: components,
  exports: components,
})
export class ComponentsModule { }
