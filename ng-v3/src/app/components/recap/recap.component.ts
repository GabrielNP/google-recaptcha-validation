
import { Component, OnDestroy } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';

import { RecaptchaService } from '../../services/recaptcha.service';

@Component({
  selector: 'app-recaptcha',
  template: `
    <button (click)="executeImportantAction()">Any action</button>
  `,
})
export class RecapComponent implements OnDestroy {
  private singleExecutionSubscription: Subscription;

  constructor(
    private recaptchaService: RecaptchaService,
    private recaptchaV3Service: ReCaptchaV3Service,
  ) { }

  ngOnDestroy(): void {
    this.singleExecutionSubscription.unsubscribe();
  }

  public executeImportantAction(): void {
    this.singleExecutionSubscription = this.recaptchaV3Service.execute('importantAction').subscribe((token) => {

      // Real response from Google Recaptcha API
      // this.recaptchaService.get(token).subscribe(data => {
      //   console.log(data);
      //   if (data.success) {
      //     alert('All right');
      //   } else {
      //     alert('We guess you are a robot!');
      //   }
      // });

      // Hard-coded response for testing
      const fakeGet = this.recaptchaService.fakeGet(token);
      if (!fakeGet.success) {
        alert('We guess you are a robot!');
      }
    });
  }
}
