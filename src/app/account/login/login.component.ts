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
    isLoginError = false;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    
    constructor(private accountService: AccountService, private router: Router) { }

    onSubmit(emailAddress, password) {
        const x = 3;
        this.accountService.authenticate(emailAddress, password).subscribe((data: any) => {
            sessionStorage.setItem('ihmbm_auth_token', data.token);
            sessionStorage.setItem('ihmb_authenticated_user', JSON.stringify(data.user));
            this.router.navigate(['']);
        }, (err: HttpErrorResponse) => {
            this.isLoginError = true;
        });
    }
}