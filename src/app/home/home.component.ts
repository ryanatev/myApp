import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userClaims: any;

    constructor(private router: Router) { }

    ngOnInit() {
        /* this.userService.getUserClaims().subscribe((data: any) => {
            this.userClaims = data;

        }); */
    }

    Logout() {
        sessionStorage.removeItem('userToken');
        this.router.navigate(['/login']);
    }
}