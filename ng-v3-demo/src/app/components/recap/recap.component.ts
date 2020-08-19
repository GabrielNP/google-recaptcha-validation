import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';

import { environment as env } from '../../../environments/environment';
import { RecaptchaService } from './../../services/recaptcha.service';


@Component({
  selector: 'recaptcha-demo',
  templateUrl: './recap.component.html',
})
export class RecapComponent implements OnInit, OnDestroy {

  private allExecutionsSubscription: Subscription;
  private singleExecutionSubscription: Subscription;
  token: string = '';
  challenge: boolean = false;
  siteKey = env.v2siteKey;

  constructor(
    private recaptchaModule: RecaptchaModule,
    private recaptchaService: RecaptchaService,
    private recaptchaV3Service: ReCaptchaV3Service,
  ) {
  }

  public executeAction(action: string): void {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
    this.singleExecutionSubscription = this.recaptchaV3Service.execute(action)
      .subscribe();
  }

  public ngOnInit() {
    console.log('on init', this.allExecutionsSubscription, this.singleExecutionSubscription);
    this.allExecutionsSubscription = this.recaptchaV3Service.onExecute
      .subscribe((data) => {
        this.token = data.token;

        // Real response from Google Recaptcha API
        // this.recaptchaService.get(this.token).subscribe(data => {
        //   if (data.success) {
        //     alert('All right');
        //   } else {
        //     alert('We guess you are a robot! Let\'s try a new challenge');

        //   }
        // });

        // Hard-coded response for testing
        this.callFakeGet(this.token);
      });
  }

  callFakeGet(token) {
    const fakeGet = this.recaptchaService.fakeGet(this.token);
    if (!fakeGet.success) {
      alert('We guess you are a robot! Let\'s try a new challenge');
      this.getRecaptchaV2Challenge();
    }
  }
  getRecaptchaV2Challenge() {
    this.challenge = !this.challenge;
  }

  RecaptchaV2Resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    alert('Now you can continue login');
  }

  public ngOnDestroy() {
    if (this.allExecutionsSubscription) {
      this.allExecutionsSubscription.unsubscribe();
    }
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
  }

}
