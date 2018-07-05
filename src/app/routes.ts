import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user';
import { LoginComponent, RegisterComponent } from './account';
import { AuthGuard } from './account/authorization/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: 'register', component: UserComponent,
        children: [{ path: '', component: RegisterComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: LoginComponent }]
    }/* ,
    { path: '', redirectTo: '/home', pathMatch: 'full' } */
];
