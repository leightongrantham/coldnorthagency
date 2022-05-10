import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
	space: 'ms5y63appw29',
	accessToken: 'R_JbgCi516Tolk-HOjbi0AGcfSlUNFgUfPHeMU9pr3A',

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
