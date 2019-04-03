import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Contact, ContactImportService } from 'src/app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-confirm-import',
  templateUrl: './confirm-import.component.html',
  styleUrls: ['./confirm-import.component.scss']
})
export class ConfirmImportComponent implements OnInit, OnDestroy {

  @Output() finished = new EventEmitter<void>();
  @Output() goBack = new EventEmitter<void>();

  private newContactListSubscription: Subscription;
  contacts: Contact[];

  constructor(private contactImport: ContactImportService) { }

  ngOnInit() {
    this.newContactListSubscription = this.contactImport.newContactList
      .subscribe(list => this.contacts = list);
  }

  ngOnDestroy() {
    if (this.newContactListSubscription) {
      this.newContactListSubscription.unsubscribe();
    }
  }

  confirmContacts(): void {
    this.finished.next();
  }

  back(): void {
    this.goBack.next();
  }

}
