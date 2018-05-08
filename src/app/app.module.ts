import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ContactComponent, RegistrationService } from './registration'

@NgModule({
  declarations: [
    AppComponent,
	ContactComponent
  ],
  imports: [
	NgbModule.forRoot(),
    BrowserModule,
	HttpClientModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
