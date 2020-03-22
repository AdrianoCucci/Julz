import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import { SocialMenuComponent } from './menus/social-menu/social-menu.component';
import { MobileMenuComponent } from './menus/mobile-menu/mobile-menu.component';
import { RowComponent } from './layout/row/row.component';
import { AppRoutingModule } from '../app-routing.module';

const components = [
  NavigationComponent,
  MainMenuComponent,
  SocialMenuComponent,
  MobileMenuComponent,
  RowComponent,
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
