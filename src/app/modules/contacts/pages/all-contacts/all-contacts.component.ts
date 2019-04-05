import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Contact, ContactService, GroupService } from 'src/app/core';

import { AddEditContactComponent } from 'src/app/shared/components/add-edit-contact/add-edit-contact.component';

import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss']
})
export class AllContactsComponent implements OnInit, OnDestroy {

  private constactListSubscription: Subscription;

  contacts: Contact[] = [];
  filteredContacts: Contact[];
  pagedContacts: Contact[];

  searchText: string;

  paginationRotate: boolean = true;
  pageSize: number = 20;
  maxSize: number = 5;

  currentSorting: string;

  constructor(private modalService: BsModalService, private contact: ContactService, private group: GroupService,
    private router: Router) { }

  ngOnInit() {
    this.constactListSubscription = this.contact.list().subscribe(contacts => {
      this.contacts = this.filteredContacts = contacts;
      this.sortContacts('updated');
      this.setPagedContacts(0, 20);
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
    this.setPagedContacts(0, 20);
  }

  sortContacts(sortBy: string) {
    switch (sortBy) {
      case 'name':
        this.currentSorting = 'Name (Asc)';
        this.filteredContacts = this.filteredContacts.sort(this.compareByLastName);
        this.setPagedContacts(0, 20);
        return;
      case 'name-desc':
        this.currentSorting = 'Name (Desc)';
        this.filteredContacts = this.filteredContacts.sort(this.compareByLastName).reverse();
        this.setPagedContacts(0, 20);
        return;
      case 'updated':
        this.currentSorting = 'Last Updated';
        return;
      case 'messaged':
        this.currentSorting = 'Last Messaged';
        return;
      case 'created':
        this.currentSorting = 'Last Created';
        return;
      default:
        return;
    }
  }

  pageChanged(page: number) {
    const start = (page - 1) * 20;
    const end = start + 20;
    this.setPagedContacts(start, end);
  }

  addContact(): void {
    const contact: Contact = { id: "", firstName: "", lastName: "", phone: "", email: "", whatsApp: "", group: "" };
    const initialState = {
      contactToEdit: contact,
      addContact: true
    };
    this.modalService.show(AddEditContactComponent, {initialState});
  }

  editContact(contact: Contact): void {
    const initialState = {
      contactToEdit: contact,
      editContact: true
    };
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

  private setPagedContacts(start: number, end: number) {
    this.pagedContacts = this.filteredContacts.slice(start, end);
  }

  private compareByLastName(a: Contact, b: Contact) {
    const lastNameA = a.lastName.toLowerCase();
    const lastNameB = b.lastName.toLowerCase();

    let comparison = 0;
    if (lastNameA > lastNameB) {
      comparison = 1;
    } else if (lastNameA < lastNameB) {
      comparison = -1;
    }
    return comparison;
  }

}
