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

  private groupToEdit: Group;
  private addGroup: boolean;
  private editGroup: boolean;

  groupForm: FormGroup;
  groupError: string;

  constructor(public bsModalRef: BsModalRef, private group: GroupService) { }

  ngOnInit() {
    this.groupForm = new FormGroup({
      id: new FormControl(this.editGroup ? this.groupToEdit.id : "new", Validators.required),
      name: new FormControl(this.groupToEdit.name, Validators.required)
    });
  }

  saveGroup(): void {
    this.groupError = null;
    if (this.editGroup) {
      this.group.save(this.groupForm.value)
        .then(() => this.bsModalRef.hide())
        .catch(err => this.groupError = err);
    } else if (this.addGroup) {
      this.group.create(this.groupForm.value)
        .then(() => this.bsModalRef.hide())
        .catch(err => this.groupError = err);
    }
  }

}
