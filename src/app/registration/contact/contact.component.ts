import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { RegistrationService } from '../services/registration.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
	title = 'app';
	text: any;
	state: any;
	lookupStates: Function;
	inputFormatter: Function;
	resultFormatter: Function;

	states: Array<any>;

	constructor(private registrationService: RegistrationService) {
		this.lookupStates = (text$: Observable<string>) => {
			return text$.pipe(
				debounceTime(200),
				distinctUntilChanged(),
				map((term: any) => {
					if(term.length < 2) {
						return [];
					}

					return this.states.filter(v => {
						return v.value.toLowerCase().indexOf(term.toLowerCase()) > -1;
					}).slice(0, 10);
				})
			);
		}

		this.inputFormatter = (result: any) => (result.id+": "+result.value.toUpperCase());
		this.resultFormatter = (result: any) => result.value.toUpperCase();
	}

	ngOnInit() {
		this.text = 'Hello Esther!';
		this.registrationService.getStates('USA').subscribe((response: any)  => {
			this.states = response.valueObject;
			console.log(this.states);
		}, error => {
			console.log(error);
		});
	}

	ngOnDestroy() {
		// implement any destructive code here
	}

	changeText() {
		const temp = new Date().getTime();
		this.text = temp;
	}
}
