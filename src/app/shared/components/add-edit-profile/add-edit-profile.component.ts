import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'lns-add-edit-profile',
  templateUrl: './add-edit-profile.component.html',
  styleUrls: ['./add-edit-profile.component.scss']
})
export class AddEditProfileComponent implements OnInit {

  profile: User;
  profileForm: FormGroup;
  saveError: string;

  constructor(public bsModalRef: BsModalRef, private user: UserService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      position: new FormControl('')
    });
  }

  saveUserProfile(): void {
    this.saveError = null;
    
    this.profile.firstName = this.profileForm.value['firstName'];
    this.profile.lastName = this.profileForm.value['lastName'];
    this.profile.position = this.profileForm.value['position'];

    this.user.save(this.profile)
      .then(() => this.bsModalRef.hide())
      .catch(err => this.saveError = err);
  }

}
