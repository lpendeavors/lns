import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact, ContactImportService } from 'src/app/core';
import { Observable, of, Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lns-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.scss']
})
export class OrganizeComponent implements OnInit {

  @Output() goBack = new EventEmitter<void>();
  @Output() finished = new EventEmitter<Contact[]>();

  private listSubscription: Subscription;

  headers: string[];
  contactsInfo: string[][];
  
  organizeForm: FormGroup;
  organizedContacts: Contact[] = [];

  constructor(private contactImport: ContactImportService) { }

  ngOnInit() {
    this.listSubscription = this.contactImport.importList.subscribe(list => {
      if (list.length > 1) {
        this.headers = list[0];
        this.contactsInfo = list.slice(1, list.length);
      }
    });
    this.organizeForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy() {
    if (this.listSubscription) {
      this.listSubscription.unsubscribe();
    }
  }

  organizeContacts(): void {
    const firstNameIndex = this.headers.indexOf(this.organizeForm.value['firstName']);
    const lastNameIndex = this.headers.indexOf(this.organizeForm.value['lastName']);
    const phoneIndex = this.headers.indexOf(this.organizeForm.value['phone']);
    const emailIndex = this.headers.indexOf(this.organizeForm.value['email']);
    this.contactsInfo.forEach(contact => {
      const newContact: Contact = {
        id: '',
        group: '',
        firstName: contact[firstNameIndex],
        lastName: contact[lastNameIndex],
        phone: this.stripDashes(contact[phoneIndex]),
        email: contact[emailIndex]
      };
      this.organizedContacts.push(newContact);
      this.contactImport.newContactList.next(this.organizedContacts);
    });
    this.finished.next();
  }

  private stripDashes(value: string): string {
    return value.split('-').join('');
  }

  back(): void {
    this.goBack.next();
  }

}
