// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Routes } from '@angular/router';
import { HomePage } from 'src/app/pages/home/home.page';
import { MusicPage } from 'src/app/pages/music/music.page';
import { AboutPage } from 'src/app/pages/about/about.page';
import { VideosPage } from 'src/app/pages/videos/videos.page';
import { GalleryPage } from 'src/app/pages/gallery/gallery.page';
import { PageNotFoundPage } from 'src/app/pages/page-not-found/page-not-found.page';

export const environment = {
  production: false,
  serverUrl: "http://localhost:3000",
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
