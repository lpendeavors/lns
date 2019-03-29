import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './pages/settings.component';
import { ContactsSettingsComponent } from './pages/contacts-settings/contacts-settings.component';
import { CampaignsSettingsComponent } from './pages/campaigns-settings/campaigns-settings.component';
import { EmailSettingsComponent } from './pages/email-settings/email-settings.component';
import { ReviewsSettingsComponent } from './pages/reviews-settings/reviews-settings.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { BillingSettingsComponent } from './pages/billing-settings/billing-settings.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: SettingsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'profile'
                    },
                    {
                        path: 'contacts',
                        component: ContactsSettingsComponent
                    },
                    {
                        path: 'campaigns',
                        component: CampaignsSettingsComponent
                    },
                    {
                        path: 'email',
                        component: EmailSettingsComponent
                    },
                    {
                        path: 'reviews',
                        component: ReviewsSettingsComponent
                    },
                    {
                        path: 'profile',
                        component: ProfileSettingsComponent
                    },
                    {
                        path: 'billing',
                        component: BillingSettingsComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SettingsRoutingModule { }