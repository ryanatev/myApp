import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class LoginService {
	url = 'http://localhost:1337/';
	
	constructor(private http: HttpClient) {
	}

	login(post: any) {
		const url = this.url + 'login';
		return this.http.post(url, post, httpOptions)
	}
}
