import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isAuthenticating: boolean;
  authError: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.authError = null;
    this.isAuthenticating = true;
    this.auth.login(this.loginForm.value["email"], this.loginForm.value["password"])
      .then(user => {
        this.isAuthenticating = false;
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        this.authError = err.message;
        this.isAuthenticating = false;
      });
  }
}
