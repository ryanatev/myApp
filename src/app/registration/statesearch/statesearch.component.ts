import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'ngbd-typeahead-basic',
  templateUrl: './statesearch.component.html',
  styleUrls: ['./statesearch.component.css']
})
export class NgbdTypeaheadBasic implements OnInit, OnDestroy {
  public model: any;

  states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      // waits 200 milliseconds before searhing
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  }

  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {

	this.registrationService.getStates('USA').subscribe((response: any)  => {
		// states = response.valueObject;
	}, error => {
		console.log(error);
	});
  }

  ngOnDestroy() {
	  // implement any destructive code here
  }

}
