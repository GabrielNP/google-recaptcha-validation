import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { RecapComponent } from './components/recap/recap.component';

@NgModule({
  declarations: [
    AppComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RecaptchaV3Module,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.siteKey },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
