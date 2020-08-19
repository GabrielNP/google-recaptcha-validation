import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { OnExecuteData, ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';

import { RecapComponent } from './components/recap/recap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app'
}
