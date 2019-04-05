import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact, ContactService, ContactImportService, GroupService } from 'src/app/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'lns-import-contacts',
  templateUrl: './import-contacts.component.html',
  styleUrls: ['./import-contacts.component.scss']
})
export class ImportContactsComponent implements OnInit, OnDestroy {

  contactsImportShowing: boolean;
  contactsOrganizeShowing: boolean;
  contactsConfirmShowing: boolean;

  contactsError: string;

  private newContactsSubscription: Subscription;
  private newContactListSubscription: Subscription;
  private newGroupNameSubscription: Subscription;

  private newGroupName: string;
  private newContactList: Contact[];

  constructor(private contact: ContactService, private router: Router, private contactImport: ContactImportService,
    private group: GroupService) { }

  ngOnInit() {
    this.contactsImportShowing = true;
    this.newContactListSubscription = this.contactImport.newContactList.subscribe(list => this.newContactList = list);
    this.newGroupNameSubscription = this.contactImport.newGroupName.subscribe(name => this.newGroupName = name);
  }

  ngOnDestroy() {
    if (this.newContactsSubscription) {
      this.newContactsSubscription.unsubscribe();
    }
    if (this.newContactListSubscription) {
      this.newContactListSubscription.unsubscribe();
    }
    if (this.newGroupNameSubscription) {
      this.newGroupNameSubscription.unsubscribe();
    }
  }

  nextWizardTab($event): void {
    if (this.contactsImportShowing) {
      this.contactsImportShowing = false;
      this.contactsOrganizeShowing = true;
    } else if (this.contactsOrganizeShowing) {
      this.contactsOrganizeShowing = false;
      this.contactsConfirmShowing = true;
    }
  }

  prevWizardTab($event): void {
    if (this.contactsOrganizeShowing) {
      this.contactsOrganizeShowing = false;
      this.contactsImportShowing = true;
    } else if (this.contactsConfirmShowing) {
      this.contactsConfirmShowing = false;
      this.contactsOrganizeShowing = true;
    }
  }

  finishAddingContacts($event): void {
    this.group.create({
      id: "",
      name: this.newGroupName
    })
    .then(group => {
      this.newContactList.forEach(contact => {
        contact.group = group.id;
        this.contact.create(contact);
      });
    });
  }

}
