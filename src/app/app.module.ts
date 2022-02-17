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

@NgModule({
	declarations: [
		AppComponent,
		ArtistTilesComponent,
		NavComponent,
		ArtistsComponent,
		AboutComponent,
		MusicComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
