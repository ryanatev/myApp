
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SailsModule, SailsOptions, SailsEnvironment } from 'ngx-sails-socketio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserService } from './user';
import { PostService } from './post';

import { AccountService, LoginComponent, RegisterComponent, AuthGuard, AuthInterceptor } from './account';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user';

import { appRoutes } from './routes';

const options: SailsOptions = {
	url: 'http://localhost:1337',
	prefix: '/notifications', // Optional uri prefix
	environment: SailsEnvironment.DEV,
	query: '__sails_io_sdk_version=0.11.0&__sails_io_sdk_platform=windows&__sails_io_sdk_language=javascript',
	reconnection: true,
	autoConnect: false
};

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		UserComponent
	],
	imports: [
		NgbModule.forRoot(),
		SailsModule.forRoot(options, []),
		BrowserModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		UserService,
		PostService,
		AccountService,
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
