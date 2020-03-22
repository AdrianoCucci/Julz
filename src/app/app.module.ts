import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { MusicPage } from './pages/music/music.page';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainMenuComponent } from './components/menus/main-menu/main-menu.component';
import { SocialMenuComponent } from './components/menus/social-menu/social-menu.component';
import { MobileMenuComponent } from './components/menus/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MusicPage,
    NavigationComponent,
    MainMenuComponent,
    SocialMenuComponent,
    MobileMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
