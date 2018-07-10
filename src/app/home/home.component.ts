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
        /* this.userService.getUserClaims().subscribe((data: any) => {
            this.userClaims = data;

        }); */

        this.user = this.accountService.getAuthenticatedUser();
        this.user.loggedOn = this.accountService.isLoggedIn();
    }

    Logout() {
        sessionStorage.removeItem('userToken');
        this.router.navigate(['/login']);
    }
}