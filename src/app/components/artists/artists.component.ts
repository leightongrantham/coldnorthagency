import { Entry } from 'contentful';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../../services/contentful.service';
import { Artist } from '../../interfaces/artist';

@Component({
	selector: 'app-artists',
	templateUrl: './artists.component.html',
	styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
	public artist = <Artist>{};

	constructor(private router: ActivatedRoute,
				private contentful: ContentfulService) {
	}

	ngOnInit(): void {
		this.contentful.getArtists()
			.then((artists: Entry<any>[]) => {
				artists.forEach((artist) => {
					let { name } = artist.fields || {};
					let { description } = artist.fields || {};
					let { url } = artist.fields.image.fields.file || {};
					let { slug } = artist.fields || {};

					console.log(artist)

					this.router.params.subscribe(data => {
						if (data.slug === slug) {
							this.artist.name = name;
							this.artist.description = description
							this.artist.image = url;
						}
					});
				});
			})
	}
}
