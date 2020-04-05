import { Routes } from '@angular/router';
import { HomePage } from 'src/app/pages/home/home.page';
import { MusicPage } from 'src/app/pages/music/music.page';
import { AboutPage } from 'src/app/pages/about/about.page';
import { VideosPage } from 'src/app/pages/videos/videos.page';
import { GalleryPage } from 'src/app/pages/gallery/gallery.page';
import { PageNotFoundPage } from 'src/app/pages/page-not-found/page-not-found.page';

export const environment = {
  production: true,
  routes: [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomePage },
    { path: "music", component: MusicPage },
    { path: "about", component: AboutPage },
    { path: "videos", component: VideosPage },
    { path: "gallery", component: GalleryPage },
    { path: "**", component: PageNotFoundPage }
  ] as Routes
};
