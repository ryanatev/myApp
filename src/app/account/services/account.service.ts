import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
	constructor(private http: HttpClient) {}

	authenticate(emailAddress, password) {
		const user = {
            emailAddress: emailAddress,
            password: password
        };

		const url = 'http://localhost:1337/login';
		return this.http.post(url, user);
	}

	register(user) {
		const url = 'http://localhost:1337/register';
		return this.http.post(url, user);
	}
}
