import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
	space: 'izz9zhkzdssi',
	accessToken: 'fFra9xdZvcAZgbNOGyIgf7tcwb8vRwUcMVOPLcGA058',

	contentTypeIds: {
		artist: 'artist'
	}
}

@Injectable()
export class ContentfulService {
	private cdaClient = createClient({
		space: CONFIG.space,
		accessToken: CONFIG.accessToken
	});

	constructor() {
	}

	getArtists(query?: object): Promise<Entry<any>[]> {
		return this.cdaClient.getEntries(Object.assign({
			content_type: CONFIG.contentTypeIds.artist
		}, query))
			.then(res => res.items);
	}
}
