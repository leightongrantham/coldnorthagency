import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	host: {
		class: 'animate__animated animate__fadeIn'
	}
})
export class AppComponent {
	title = 'project';
}
