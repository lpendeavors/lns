import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  private api: string = `${environment.api_url}/sms`;

  constructor(private httpClient: HttpClient) { }

  sendVerificationSMS(phone: string, user: string) {
    return this.httpClient.post(`${this.api}/sendSMSCode`, {phone, user});
  }

  verifySMSCode(code: string, user: string) {
    return this.httpClient.post(`${this.api}/verifySMSCode`, {code, user});
  }

  sendSMSMessage() {
    
  }
}
