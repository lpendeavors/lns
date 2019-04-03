import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared';
import { AuthRoutingModule } from './auth.routing';
import { AuthService } from 'src/app/core';

import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SmsVerifyComponent } from './pages/sms-verify/sms-verify.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent, 
    SignupComponent, 
    ForgotPasswordComponent, 
    SmsVerifyComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
