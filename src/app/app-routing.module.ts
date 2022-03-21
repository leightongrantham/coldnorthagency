import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MusicComponent } from './components/music/music.component';
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
		path: 'artists', children: [
			{
				path: 'joey-stella',
				component: ArtistsComponent,
				data: { title: 'Joey Stella' }
			},
			{
				path: 'aristydes',
				component: ArtistsComponent,
				data: { title: 'Aristydes' }
			},
			{
				path: 'mikrotakt',
				component: ArtistsComponent,
				data: { title: 'Mikrotakt' }
			},
			{
				path: 'twelve-seven',
				component: ArtistsComponent,
				data: { title: 'Twelve Seven' }
			},
			{
				path: 'sylvia',
				component: ArtistsComponent,
				data: { title: 'Sylvia' }
			},
		]
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
