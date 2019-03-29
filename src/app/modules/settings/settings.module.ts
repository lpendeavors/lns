import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { SettingsRoutingModule } from './settings.routing';

import { SettingsComponent } from './pages/settings.component';
import { ContactsSettingsComponent } from './pages/contacts-settings/contacts-settings.component';
import { CampaignsSettingsComponent } from './pages/campaigns-settings/campaigns-settings.component';
import { EmailSettingsComponent } from './pages/email-settings/email-settings.component';
import { ReviewsSettingsComponent } from './pages/reviews-settings/reviews-settings.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { BillingSettingsComponent } from './pages/billing-settings/billing-settings.component';

@NgModule({
  imports: [
    SharedModule,
    SettingsRoutingModule
  ],
  declarations: [
    SettingsComponent,
    ContactsSettingsComponent,
    CampaignsSettingsComponent,
    EmailSettingsComponent,
    ReviewsSettingsComponent,
    ProfileSettingsComponent,
    BillingSettingsComponent
  ]
})
export class SettingsModule { }
