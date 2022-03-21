import { Component } from '@angular/core';
import { faInstagram, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent {
	public faInstagram: IconDefinition = faInstagram;
	public faEnvelope: IconDefinition = faEnvelope;
}
