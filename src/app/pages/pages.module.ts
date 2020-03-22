import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import { MusicPage } from './music/music.page';
import { BiographyPage } from './biography/biography.page';
import { GalleryPage } from './gallery/gallery.page';
import { ComponentsModule } from '../components/components.module';

const pages = [
  HomePage,
  MusicPage,
  BiographyPage,
  GalleryPage
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: pages,
  exports: pages,
})
export class PagesModule { }