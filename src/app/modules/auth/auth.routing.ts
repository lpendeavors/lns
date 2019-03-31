import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SmsVerifyComponent } from './pages/sms-verify/sms-verify.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'forgot',
                component: ForgotPasswordComponent
            },
            {
                path:'verify',
                component: SmsVerifyComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }