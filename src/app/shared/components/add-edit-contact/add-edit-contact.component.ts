import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Contact, Group, GroupService, ContactService } from 'src/app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss']
})
export class AddEditContactComponent implements OnInit, OnDestroy {

  private contactToEdit: Contact;
  private groupListSubscription: Subscription;
  
  groups: Group[] = [];
  contactForm: FormGroup;
  contactError: string;
  groupError: string;

  constructor(public bsModalRef: BsModalRef, private group: GroupService, private contact: ContactService) { }

  ngOnInit() {
    console.log(this.contactToEdit);
    this.contactForm = new FormGroup({
      firstName: new FormControl(this.contactToEdit.firstName, Validators.required),
      lastName: new FormControl(this.contactToEdit.lastName, Validators.required),
      phone: new FormControl(this.contactToEdit.phone, [Validators.required, Validators.pattern('[0-9]{3}[0-9]{3}[0-9]{4}')]),
      email: new FormControl(this.contactToEdit.email, Validators.required),
      whatsApp: new FormControl(this.contactToEdit.whatsApp),
      group: new FormControl(this.contactToEdit.group),
      newGroupName: new FormControl('')
    });
    this.groupListSubscription = this.group.list.subscribe(list => this.groups = list);
  }

  ngOnDestroy() {
    if (this.groupListSubscription) {
      this.groupListSubscription.unsubscribe();
    }
  }

  saveContact(): void {
    this.groupError = null;
    this.contactError = null;
    if (this.contactForm.value['group'].length === 0) {
      this.group.create({ id: "", name: this.contactForm.value['newGroupName'] })
        .then(group => {
          this.contactToEdit.group = group.id;
          if (this.contactToEdit.id.length > 0) {
            this.update(this.contactToEdit);
          } else {
            this.create(this.contactToEdit);
          }
        })
        .catch(err => this.groupError = "An error occured creating group.");
    } else {
      this.update(this.contactToEdit);
    }
  }

  private create(contact: Contact) {
    this.contact.create({
      id: "",
      firstName: this.contactForm.value['firstName'],
      lastName: this.contactForm.value['lastName'],
      phone: this.contactForm.value['phone'],
      email: this.contactForm.value['email'],
      group: contact.group
    })
    .then(contact => this.bsModalRef.hide())
    .catch(err => this.contactError = "An error occured when creating contact.");
  }

  private update(contact: Contact) {
    this.contact.update(contact)
        .then(() => 'contact saved')
        .catch(err => this.contactError = err);
  }
}
