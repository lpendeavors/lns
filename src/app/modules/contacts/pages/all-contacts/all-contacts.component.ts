import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contact } from 'src/app/core';
import { AddEditContactComponent } from 'src/app/shared/components/add-edit-contact/add-edit-contact.component';

@Component({
  selector: 'lns-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss']
})
export class AllContactsComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  addContact(): void {
    const contact: Contact = { firstName: "", lastName: "", phone: "", email: "", whatsApp: "" };
    const initialState = {
      title: 'New Contact',
      contact: contact
    }
    this.modalService.show(AddEditContactComponent, {initialState: initialState});
  }

  editContact(contact: Contact): void {
    this.modalService.show(AddEditContactComponent, {initialState: contact});
  }

}
