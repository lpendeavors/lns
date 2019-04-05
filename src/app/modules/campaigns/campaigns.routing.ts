import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCampaignsComponent } from './pages/all-campaigns/all-campaigns.component';
import { CampaignDetailsComponent } from './pages/campaign-details/campaign-details.component';
import { NewCampaignComponent } from './pages/new-campaign/new-campaign.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AllCampaignsComponent
            },
            {
                path: 'new',
                component: NewCampaignComponent
            },
            {
                path: ':id',
                component: CampaignDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CampaignsRoutingModule { }