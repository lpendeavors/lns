import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lns-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent implements OnInit {

  campaignRecipientsShowing: boolean;
  campaignMessageShowing: boolean;
  campaignConfirmationShowing: boolean;

  campaignError: string;

  constructor() { }

  ngOnInit() {
    this.campaignRecipientsShowing = true;
  }

}
