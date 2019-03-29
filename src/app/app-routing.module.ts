import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import { CONTENT_ROUTES } from '../app/shared';

import { AuthGuard } from '../app/core/guards';
import { TermsOfUseComponent } from './shared/components/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    children: CONTENT_ROUTES
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: 'terms',
    component: TermsOfUseComponent
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
