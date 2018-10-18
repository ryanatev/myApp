import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	user: any = {};
	loginError = false;
	emailPattern = AccountService.EMAIL_PATTERN;

	constructor(private accountService: AccountService, private router: Router) { }

	onSubmit(emailAddress, password) {
		this.accountService.authenticate(emailAddress, password).then((data: any) => {
			this.router.navigate(['']);
		}).catch((err: HttpErrorResponse) => {
			this.loginError = true;
		});
	}
}
