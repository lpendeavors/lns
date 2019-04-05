import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SegmentService, Segment } from 'src/app/core';

import { AddEditSegmentComponent } from 'src/app/shared/components/add-edit-segment/add-edit-segment.component';

import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss']
})
export class SegmentsComponent implements OnInit {

  private segmentsListSubscription: Subscription;
  private segments: Segment[];
  filteredSegments: Segment[];
  pagedSegments: Segment[];

  searchText: string;

  paginationRotate: boolean = true;
  pageSize: number = 20;
  maxSize: number = 5;

  constructor(private segment: SegmentService, private modalService: BsModalService) { }

  ngOnInit() {
    this.segmentsListSubscription = this.segment.list
      .subscribe(segments => this.segments = this.filteredSegments = segments);
  }

  ngOnDestroy() {
    if (this.segmentsListSubscription) {
      this.segmentsListSubscription.unsubscribe();
    }
  }

  filterSegments() {
    if (this.searchText) {
      const searchString = this.searchText.toLowerCase();
      this.filteredSegments = this.segments.filter(segment => {
        let isMatch = segment.name.toLowerCase().indexOf(searchString) > -1;
        if (isMatch) return segment;
      });
    } else {
      this.filteredSegments = this.segments;
    }
  }

  addSegment(): void {
    const segment: Segment = { id: '', name: '' };
    const initialState = {
      segmentToEdit: segment,
      addSegment: true
    };
    this.modalService.show(AddEditSegmentComponent, {initialState});
  }

  editSegment(segment: Segment): void {
    const initialState = {
      segmentToEdit: segment,
      editSegment: true
    };
    this.modalService.show(AddEditSegmentComponent, {initialState});
  }

  pageChanged(page: number) {
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.setPagedSegments(start, end);
  }

  sendEmail(segment: Segment) {
    console.log(`Send email to ${segment.name}`);
  }

  sendSMS(segment: Segment) {
    console.log(`Send SMS to ${segment.name}`);
  }

  private setPagedSegments(start: number, end: number) {
    this.pagedSegments = this.filteredSegments.slice(start, end);
  }

}
