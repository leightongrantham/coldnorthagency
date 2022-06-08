import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

interface Artist {
	name: string;
	description: string;
	image: string;
	slug: string;
}

@Component({
	selector: 'app-artist-tiles',
	templateUrl: './artist-tiles.component.html',
	styleUrls: ['./artist-tiles.component.scss']
})
export class ArtistTilesComponent implements OnInit {
	public isHovering: boolean = false;
	public isLoading: boolean = false;


	public artists: Entry<Artist>[] = [];

	constructor(private router: Router, private contentful: ContentfulService) {
		router.events.subscribe(event => {
			if(event instanceof NavigationStart) {

				console.log('started');
			}
			// NavigationEnd
			// NavigationCancel
			// NavigationError
			// RoutesRecognized
		});
	}

	showName(name) {
		console.log(name);
	}

	ngOnInit(): void {
		this.contentful.getArtists()
			.then((artists: Entry<Artist>[]) =>{
				this.artists = artists;
			})
	}

	public navigateToArtistPage(slug: string): void {
		this.router.navigate([`/artists/${slug}`],)
	}

}
