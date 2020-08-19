import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RecaptchaService {
  url: string = `https://www.google.com/recaptcha/api/siteverify?secret=${env.secretKey}&response=`;
  preventCors = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) { }

  // Real response from Google Recaptcha API
  public get(token): Observable<any> {
    this.url = `${this.preventCors}${this.url}${token}`;
    return this.http.get<Object>(this.url);
  }

  // Hard-coded response for testing
  fakeGet(token) {
    const data = {'success': false, 'challenge_ts': '2020-08-17T14:41:47Z', 'hostname': 'localhost', 'score': 0.41, 'action': 'submit_form'};
    return data;
  }
}
