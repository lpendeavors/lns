import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contact, ContactService, GroupService, Group } from 'src/app/core';

import { AddEditContactComponent } from 'src/app/shared/components/add-edit-contact/add-edit-contact.component';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'lns-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss']
})
export class AllContactsComponent implements OnInit, OnDestroy {

  private constactListSubscription: Subscription;

  bsModalRef: BsModalRef;
  contacts: Contact[] = [];
  filteredContacts: Contact[];
  
  searchText: string;

  constructor(private modalService: BsModalService, private contact: ContactService, private group: GroupService,
    private router: Router) { }

  ngOnInit() {
    this.constactListSubscription = this.contact.list().subscribe(contacts => {
      this.contacts = this.filteredContacts = contacts;
    });
  }

  ngOnDestroy() {
    if (this.constactListSubscription) {
      this.constactListSubscription.unsubscribe();
    }
  }

  filterContacts() {
    if (this.searchText) {
      const searchString = this.searchText.toLowerCase();
      this.filteredContacts = this.contacts.filter(contact => {
        let isMatch = false;
        isMatch = contact.firstName.toLowerCase().indexOf(searchString) > -1 
          || contact.lastName.toLowerCase().indexOf(searchString) > -1;
        if (isMatch) return contact;
      });
    } else {
      this.filteredContacts = this.contacts;
    }
  }

  sortContacts(sortBy: string) {
    
  }

  addContact(): void {
    const contact: Contact = { id: "", firstName: "", lastName: "", phone: "", email: "", whatsApp: "", group: "" };
    const initialState = {
      title: 'New Contact',
      contactToEdit: contact
    };
    this.modalService.show(AddEditContactComponent, {initialState});
  }

  editContact(contactToEdit: Contact): void {
    const initialState = {contactToEdit};
    this.modalService.show(AddEditContactComponent, {initialState});
  }

  importContacts(): void {
    this.router.navigate(['/contacts/import']);
  }

  sendEmail(contact: Contact) {
    console.log(`Send email to ${contact.firstName}`);
  }

  sendSMS(contact: Contact) {
    console.log(`Send SMS to ${contact.firstName}`);
  }

}
