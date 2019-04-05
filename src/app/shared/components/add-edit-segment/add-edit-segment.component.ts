import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Segment, SegmentService } from 'src/app/core';

@Component({
  selector: 'lns-add-edit-segment',
  templateUrl: './add-edit-segment.component.html',
  styleUrls: ['./add-edit-segment.component.scss']
})
export class AddEditSegmentComponent implements OnInit {

  private segmentToEdit: Segment;
  private addSegment: boolean;
  private editSegment: boolean;

  segmentForm: FormGroup;
  segmentError: string;

  constructor(public bsModalRef: BsModalRef, private segment: SegmentService) { }

  ngOnInit() {
    this.segmentForm = new FormGroup({
      id: new FormControl(this.editSegment ? this.segmentToEdit.id : "new", Validators.required),
      name: new FormControl(this.segmentToEdit.name, Validators.required)
    });
  }

  saveSegment(): void {
    this.segmentError = null;
    if (this.editSegment) {
      this.segment.save(this.segmentForm.value)
        .then(() => this.bsModalRef.hide())
        .catch(err => this.segmentError = err);
    } else if (this.addSegment) {
      this.segment.create(this.segmentForm.value)
        .then(() => this.bsModalRef.hide())
        .catch(err => this.segmentError = err);
    }
  }

}
