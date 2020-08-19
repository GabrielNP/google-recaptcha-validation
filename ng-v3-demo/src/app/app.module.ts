import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RecaptchaModule, RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { environment as env } from './../environments/environment';
import { RecapComponent } from './components/recap/recap.component';

@NgModule({
  declarations: [
    AppComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaV3Module,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: env.siteKey },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
