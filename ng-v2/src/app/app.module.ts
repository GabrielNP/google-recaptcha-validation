import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
