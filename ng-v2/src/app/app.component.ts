import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',

  template: `
  <re-captcha
    (resolved)="resolved($event)"
    [siteKey]="siteKey" >
  </re-captcha>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  siteKey = environment.siteKey;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
