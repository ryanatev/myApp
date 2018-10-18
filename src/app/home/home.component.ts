import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	user: any;

	constructor(private router: Router, private accountService: AccountService) { }

	ngOnInit() {
		this.user = this.accountService.getAuthenticatedUser();
		this.user.loggedOn = this.accountService.isLoggedIn();
	}

	logout() {
		sessionStorage.removeItem('ihmb_authenticated_user');
		sessionStorage.removeItem('ihmbm_auth_token');
		this.router.navigate(['/login']);
	}
}
