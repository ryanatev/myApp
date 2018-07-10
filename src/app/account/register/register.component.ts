import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: any;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

    constructor(private accountService: AccountService) { }

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
}
