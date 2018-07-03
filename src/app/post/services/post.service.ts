import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class PostService {
	url = 'http://localhost:1337/';
	
	constructor(private http: HttpClient) {
	}

	getPosts() {
		const url = this.url + 'posts';
		return this.http.get(url);
	}

	createPost(post: any) {
		const url = this.url + 'post';
		return this.http.post(url, post, httpOptions)
	}
}
