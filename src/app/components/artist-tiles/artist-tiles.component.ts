import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


	public artists: Entry<Artist>[] = [];

	constructor(private router: Router, private contentful: ContentfulService) {
	}

	ngOnInit(): void {
		this.contentful.getArtists()
			.then((artists: Entry<Artist>[]) =>{
				this.artists = artists;
				console.log(this.artists);
			} )
	}

	public navigateToArtistPage(slug: string): void {
		this.router.navigate([`/artists/${slug}`],)
	}

}
