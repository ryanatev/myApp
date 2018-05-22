import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgbdTypeaheadBasic } from './registration/statesearch/statesearch.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ContactComponent, RegistrationService } from './registration'

@NgModule({
  declarations: [
    AppComponent, 
    NgbdTypeaheadBasic,
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
