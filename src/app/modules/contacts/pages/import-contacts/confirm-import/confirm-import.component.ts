import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Contact, ContactImportService, CompanyService, CustomContactField } from 'src/app/core';
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
  private companySubscription: Subscription;

  contacts: Contact[];
  hasCustomFields: boolean;
  customFields: CustomContactField[] = [];

  constructor(private contactImport: ContactImportService, private company: CompanyService) { }

  ngOnInit() {
    this.newContactListSubscription = this.contactImport.newContactList
      .subscribe(list => {
        this.contacts = list;
        if (list.length > 0) {
          if (list[0].customFields) {
            this.hasCustomFields = true;
            this.companySubscription = this.company.getCompanyById('1').subscribe(company => {
              this.customFields = company.customFields;
            });
          }
        }
      });
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
