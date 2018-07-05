import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sails, SailsRequest, SailsSubscription } from 'ngx-sails-socketio';


import { Post } from '../dto/post';

@Injectable()
export class PostService {
	private socket: any;

	constructor(private http: HttpClient, private sails: Sails) {}

	save(post: Post) {
		const url = 'http://localhost:1337/post';
		return this.http.post(url, post);
	}

	/* onPost(): Observable<Array<Post>> {
		return new Observable<Array<Post>>(observer => {
			this.socket.on('blast', (data: Array<Post>) => observer.next(data));
		});
	}*/

	onPost() {
		new SailsRequest(this.sails).get('/posts').subscribe(response => {
			console.log(response);
		});

		new SailsSubscription(this.sails).on('posts').subscribe(response => {
			console.log(response);
		});
	}

	/*onPostEvent(event: Event): Observable<any> {
		return new Observable<Event>(observer => {
			this.socket.on(event, () => observer.next());
		});
	} */
}
