import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AccountService {
	public static EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
	httpOptions: any;

	constructor(private http: HttpClient) { 
		this.httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'No-Auth': 'True'
			})
		}
	}

	authenticate(emailAddress, password) {
		const $ctrl = this;
		const user = {
			emailAddress: emailAddress,
			password: password
		};

		const url = 'http://localhost:1337/login';
		return new Promise((resolve, reject) => {
			this.http.post(url, user).subscribe((data: any) => {
				resolve(data);
			}, (err: HttpErrorResponse) => {
				reject(err);
			})
		});
	}

	register(user) {
		const url = 'http://localhost:1337/register';
		return this.http.post(url, user);
	}

	isLoggedIn(): boolean {
		return sessionStorage.getItem('ihmbm_auth_token') !== null;
	}

	getAuthenticatedUser() {
		const user = sessionStorage.getItem('ihmb_authenticated_user');
		if (user != null) {
			return JSON.parse(user);
		}

		return null;
	}
}
