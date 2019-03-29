import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CampaignsRoutingModule } from './campaigns.routing';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AllCampaignsComponent } from './pages/all-campaigns/all-campaigns.component';
import { CampaignDetailsComponent } from './pages/campaign-details/campaign-details.component';
import { NewCampaignComponent } from './pages/new-campaign/new-campaign.component';

@NgModule({
  imports: [
    SharedModule,
    CampaignsRoutingModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    AllCampaignsComponent, 
    CampaignDetailsComponent, 
    NewCampaignComponent
  ]
})
export class CampaignsModule { }
