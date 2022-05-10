import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistTilesComponent } from './components/artist-tiles/artist-tiles.component';

const routes: Routes = [
	{
		path: '', redirectTo: 'home', pathMatch: 'full'
	},
	{
		path: 'home', component: ArtistTilesComponent
	},
	{
		path: 'artists/:slug', component: ArtistsComponent
	},
	{
		path: 'about', component: AboutComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
