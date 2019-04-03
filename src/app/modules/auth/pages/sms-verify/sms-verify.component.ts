import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SmsService, AuthService } from 'src/app/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-sms-verify',
  templateUrl: './sms-verify.component.html',
  styleUrls: ['./sms-verify.component.scss']
})
export class SmsVerifyComponent implements OnInit, OnDestroy {

  smsVerifyForm: FormGroup;
  authError: string;
  isAuthenticating: boolean;
  smsWasSent: boolean;

  currentUserSubscription: Subscription;
  sendSMSSubscription: Subscription;
  verifySMSSubscription: Subscription;

  constructor(private sms: SmsService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.smsVerifyForm = new FormGroup({
      phone: new FormControl('', [Validators.required]),
      verificationCode: new FormControl('')
    });
  }

  ngOnDestroy() {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
    if (this.sendSMSSubscription) {
      this.sendSMSSubscription.unsubscribe();
    }
    if (this.verifySMSSubscription) {
      this.verifySMSSubscription.unsubscribe();
    }
  }

  sendVerification() {
    this.authError = null;
    this.isAuthenticating = true;
    if (this.smsVerifyForm.valid){
      this.sendSMSSubscription = this.sms.sendVerificationSMS(this.smsVerifyForm.value["phone"], "234")
      .subscribe(sent => {
        this.smsWasSent = true;
        this.isAuthenticating = false;
        this.smsVerifyForm.reset();
      });
    }
  }

  verifyCode() {
    this.authError = null;
    this.isAuthenticating = true;
    if (this.smsVerifyForm.value['verificationCode'].length > 0) {
      this.verifySMSSubscription = this.sms.verifySMSCode(this.smsVerifyForm.value['verificationCode'], "4353")
      .subscribe(verified => {
        if (verified) {
          this.router.navigate(['/dashboard']);
        } else {
          this.authError = "Verification code is invalid";
        }
      });
    } else {
      this.isAuthenticating = false;
      this.authError = 'Verification code is invalid';
    }
  }

}
