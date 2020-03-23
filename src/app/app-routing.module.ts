import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { MusicPage } from './pages/music/music.page';
import { BiographyPage } from './pages/biography/biography.page';
import { VideosPage } from './pages/videos/videos.page';
import { GalleryPage } from './pages/gallery/gallery.page';
import { PageNotFoundPage } from './pages/page-not-found/page-not-found.page';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePage },
  { path: "music", component: MusicPage },
  { path: "biography", component: BiographyPage },
  { path: "videos", component: VideosPage },
  { path: "gallery", component: GalleryPage },
  { path: "gallery", component: GalleryPage },
  { path: "**", component: PageNotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
