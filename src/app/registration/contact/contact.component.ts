import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  title = 'app';
  text: any;
  states: Array<any>

  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {
	this.text = 'Hello Esther!';
	this.registrationService.getStates('USA').subscribe((response: any)  => {
		this.states = response.valueObject;
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
