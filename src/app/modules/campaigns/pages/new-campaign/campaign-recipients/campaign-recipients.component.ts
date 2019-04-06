import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroupService, SegmentService, ContactService, Group, Segment, Contact } from 'src/app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-campaign-recipients',
  templateUrl: './campaign-recipients.component.html',
  styleUrls: ['./campaign-recipients.component.scss']
})
export class CampaignRecipientsComponent implements OnInit, OnDestroy {

  private groupListSubscription: Subscription;
  private segmentListSubscription: Subscription;

  groups: Group[] = [];
  segments: Segment[] = [];
  selection: any[] = [];

  recipientList: Contact[] = [];

  constructor(private group: GroupService, private segment: SegmentService) { }

  ngOnInit() {
    this.groupListSubscription = this.group.list.subscribe(list => this.groups = list);
    this.segmentListSubscription = this.segment.list.subscribe(list => this.segments = list);
  }

  ngOnDestroy() {
    if (this.groupListSubscription) {
      this.groupListSubscription.unsubscribe();
    }
    if (this.segmentListSubscription) {
      this.segmentListSubscription.unsubscribe();
    }
  }

}
