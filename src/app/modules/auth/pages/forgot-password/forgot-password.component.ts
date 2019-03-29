import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'lns-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  passwordResetForm: FormGroup;
  authError: string;
  isAuthenticating: boolean;
  emailWasSent: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.passwordResetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  sendResetEmail() {
    this.isAuthenticating = true;
    this.authError = null;
    this.auth.resetPassword(this.passwordResetForm.value["email"])
      .then(response => {
        this.isAuthenticating = false;
        this.emailWasSent = true;
        this.passwordResetForm.reset();
      })
      .catch(err => this.authError = err.message);
  }

}
