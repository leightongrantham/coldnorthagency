import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistTilesComponent } from './components/artist-tiles/artist-tiles.component';
import { NavComponent } from './components/nav/nav.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { AboutComponent } from './components/about/about.component';
import { MusicComponent } from './components/music/music.component';
import { SocialsComponent } from './components/socials/socials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		ArtistTilesComponent,
		NavComponent,
		ArtistsComponent,
		AboutComponent,
		MusicComponent,
		SocialsComponent,
  FooterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
