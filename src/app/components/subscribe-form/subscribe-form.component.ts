import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailchimpService } from '../../services/mailchimp.service';

@Component({
	selector: 'app-subscribe-form',
	templateUrl: './subscribe-form.component.html',
	styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {
	private formData: FormGroup;

	constructor(private api: MailchimpService,
				private builder: FormBuilder) {
	}

	ngOnInit(): void {
		this.formData = this.builder.group({
			name: new FormControl({}, [Validators.required]),
			email: new FormControl({}, [Validators.compose([Validators.required, Validators.email])]),
		});
	}

	public async onSubmit(): Promise<void> {
		setTimeout(SubscribeFormComponent.clearForm, 1000)
	}

	private static clearForm(): TimerHandler {
		document.forms['mc-embedded-subscribe-form'].reset();

		return;
	}
}
