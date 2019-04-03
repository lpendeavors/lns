import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GroupService, Group } from 'src/app/core';

@Component({
  selector: 'lns-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.scss']
})
export class AddEditGroupComponent implements OnInit {

  groupForm: FormGroup;
  groupError: string;

  constructor(public bsModalRef: BsModalRef, private group: GroupService) { }

  ngOnInit() {
    this.groupForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  saveGroup(): void {
    this.group.create({ id: "", name: this.groupForm.value['name'] })
      .then(() => this.bsModalRef.hide())
      .catch(err => this.groupError = err);
  }

}
