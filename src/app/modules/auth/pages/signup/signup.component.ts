import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserService, Company, CompanyService } from 'src/app/core';

@Component({
  selector: 'lns-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  isAuthenticating: boolean;
  authError: string;

  constructor(private auth: AuthService, private user: UserService, private company: CompanyService, private router: Router) { }

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
      .then(response => {
        const company: Company = {
          id: "",
          name: this.signupForm.value["company"],
          users: [response.user.uid],
          admin: response.user.uid
        };
        this.company.saveCompany(company);
        this.router.navigate(['/auth/verify']);
      })
      .catch(err => {
        this.authError = err.message;
        this.isAuthenticating = false;
      })
  }

}
