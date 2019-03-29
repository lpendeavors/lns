import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  isAuthenticating: boolean;
  authError: string;

  constructor(private auth: AuthService, private router: Router) { }

  get passwordsMatch(): boolean {
    return this.signupForm.value['password'] === this.signupForm.value['passwordConfirm'];
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      company: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
      emailNotifications: new FormControl(true, Validators.required)
    });
  }

  signup() {
    this.authError = null;
    this.isAuthenticating = true;
    this.auth.signup(this.signupForm.value["email"], this.signupForm.value["password"])
      .then(user => {
        // Create new company
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        this.authError = err.message;
        this.isAuthenticating = false;
      })
  }

}
