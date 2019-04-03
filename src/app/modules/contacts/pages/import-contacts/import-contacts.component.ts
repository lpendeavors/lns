import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact, ContactService, ContactImportService } from 'src/app/core';
import { Subscription, of } from 'rxjs';
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

  private newContactList: Contact[];

  constructor(private contact: ContactService, private router: Router, private contactImport: ContactImportService) { }

  ngOnInit() {
    this.contactsImportShowing = true;
    this.newContactListSubscription = this.contactImport.newContactList.subscribe(list => this.newContactList = list);
  }

  ngOnDestroy() {
    if (this.newContactsSubscription) {
      this.newContactsSubscription.unsubscribe();
    }
    if (this.newContactListSubscription) {
      this.newContactListSubscription.unsubscribe();
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
    console.log(this.newContactList);
  }

}
