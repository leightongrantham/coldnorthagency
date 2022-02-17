import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MusicComponent } from './components/music/music.component';
import { ArtistsComponent } from './components/artists/artists.component';

const routes: Routes = [
	{
		path: '', redirectTo: 'artists', pathMatch: 'full'
	},
	{
		path: 'artists', component: ArtistsComponent
	},
	{
		path: 'music', children: [
			{
				path: 'joey-stella', component: MusicComponent
			},
			{
				path: 'aristydes', component: MusicComponent
			},
			{
				path: 'mikrotakt', component: MusicComponent
			},
			{
				path: 'twelve-seven', component: MusicComponent
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
