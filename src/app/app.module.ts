import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
	HttpClientModule,
	FormsModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
