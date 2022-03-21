import { Component, OnInit } from '@angular/core';
import { MOCK_ARTISTS } from '../../model/mockArtists';
import { Router } from '@angular/router';

@Component({
	selector: 'app-artist-tiles',
	templateUrl: './artist-tiles.component.html',
	styleUrls: ['./artist-tiles.component.scss']
})
export class ArtistTilesComponent implements OnInit {
	public artists = MOCK_ARTISTS;
	public isHovering: boolean = false;

	constructor(private router: Router) {
	}

	ngOnInit(): void {
	}


	public navigateToArtistPage(slug: string): void {
		this.router.navigate([`/artists/${slug}`],)
	}

}
