import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Contact } from 'src/app/core';

@Component({
  selector: 'lns-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss']
})
export class AddEditContactComponent implements OnInit {
  contact: Contact;
  title: string;

  contactForm: FormGroup;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(this.contact.firstName, Validators.required),
      lastName: new FormControl(this.contact.lastName, Validators.required),
      phone: new FormControl(this.contact.phone, Validators.required),
      email: new FormControl(this.contact.email, Validators.required),
      whatsApp: new FormControl(this.contact.whatsApp, Validators.required)
    });
  }

  saveContact(): void {
    this.bsModalRef.hide();
  }

}
