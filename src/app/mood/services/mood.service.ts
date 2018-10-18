import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoodService {
	constructor(private http: HttpClient) { }
}
