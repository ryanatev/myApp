import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	user: any;
	loginError = false;
	emailPattern = AccountService.EMAIL_PATTERN;

	constructor(private accountService: AccountService, private router: Router) { }

	ngOnInit() {
		this.resetForm();
	}

	resetForm(form?: NgForm) {
		if (form != null) {
			form.reset();
		}

		this.user = {
			password: '',
			emailAddress: '',
			firstName: '',
			lastName: ''
		}
	}

	onSubmit(form: NgForm) {
		this.accountService.register(form.value).subscribe((data: any) => {
			if (data.Succeeded === true) {
				this.resetForm(form);
				console.log('User registration successful');
			} else {
				console.error(data.Errors[0]);
			}
		});
	}

	private login(emailAddress, password) {
		this.accountService.authenticate(emailAddress, password).then((data: any) => {
			this.router.navigate(['']);
		}).catch((err: HttpErrorResponse) => {
			this.loginError = true;
		});
	}
}
