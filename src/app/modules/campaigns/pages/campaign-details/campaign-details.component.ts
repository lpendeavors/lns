import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lns-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  sidebarCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}
