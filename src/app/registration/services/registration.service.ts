import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistrationService {
	constructor(private http: HttpClient) {}

	getStates(country: string) {
		const url = 'https://apps.aamc.org/referenceDataService/services-rs/refdata/geo/state/listStatesByCountryCode?countryCode='+country;
		return this.http.get(url);
	}
}
