import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) { }

	getUsers() {
		const url = 'http://localhost:1337/users';
		return this.http.get(url);
	}
}
