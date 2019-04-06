import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CampaignsRoutingModule } from './campaigns.routing';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DragulaModule } from 'ng2-dragula';

import { AllCampaignsComponent } from './pages/all-campaigns/all-campaigns.component';
import { CampaignDetailsComponent } from './pages/campaign-details/campaign-details.component';
import { NewCampaignComponent } from './pages/new-campaign/new-campaign.component';
import { CampaignRecipientsComponent } from './pages/new-campaign/campaign-recipients/campaign-recipients.component';
import { CampaignMessageComponent } from './pages/new-campaign/campaign-message/campaign-message.component';
import { CampaignConfirmationComponent } from './pages/new-campaign/campaign-confirmation/campaign-confirmation.component';

@NgModule({
  imports: [
    SharedModule,
    CampaignsRoutingModule,
    CollapseModule.forRoot(),
    DragulaModule.forRoot()
  ],
  declarations: [
    AllCampaignsComponent, 
    CampaignDetailsComponent, 
    NewCampaignComponent, 
    CampaignRecipientsComponent, 
    CampaignMessageComponent, 
    CampaignConfirmationComponent
  ]
})
export class CampaignsModule { }
