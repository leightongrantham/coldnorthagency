import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-artists',
	templateUrl: './artists.component.html',
	styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
	public title: string;
	public description: string;
	public imageSrc: string;

	constructor(private router: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.router.data.subscribe(data => {
			this.title = data['title'];
			this.description = data['description'];
			this.imageSrc = data['imageSrc'];
		});

	}

}
