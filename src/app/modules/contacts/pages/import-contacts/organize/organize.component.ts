import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact, ContactImportService, GroupService, CustomContactField, Company, CompanyService, CustomField } from 'src/app/core';
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
  private companySubscription: Subscription;

  private companyToLookup: Company;

  headers: string[];
  contactsInfo: string[][];
  
  organizeForm: FormGroup;
  organizedContacts: Contact[] = [];
  customFieldsForm: FormGroup;
  customFields: CustomContactField[];
  hasCustomFields: boolean;

  constructor(private contactImport: ContactImportService, private groups: GroupService, private company: CompanyService) { }

  ngOnInit() {
    this.listSubscription = this.contactImport.importList.subscribe(list => {
      if (list.length > 1) {
        this.headers = list[0];
        this.contactsInfo = list.slice(1, list.length);
      }
    });
    this.companySubscription = this.company.getCompanyById('1').subscribe(company => {
      this.companyToLookup = company;
      if (company.customFields) {
        this.hasCustomFields = true;
        this.customFields = company.customFields;
        this.customFieldsForm = new FormGroup({});
        company.customFields.forEach(field => {
          let newControl = new FormControl('');
          let validators = [];

          if (field.required) validators.push(Validators.required);
          if (field.type === 'tel') validators.push(Validators.pattern('[0-9]{3}[0-9]{3}[0-9]{4}'));
          if (validators.length > 0) newControl.setValidators(validators);

          this.customFieldsForm.addControl(field.id, newControl);
        });
      }
    });
    this.organizeForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      groupName: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy() {
    if (this.listSubscription) {
      this.listSubscription.unsubscribe();
    }
    if (this.companySubscription) {
      this.companySubscription.unsubscribe();
    }
  }

  organizeContacts(): void {
    this.contactImport.newGroupName.next(this.organizeForm.value['groupName']);
    const firstNameIndex = this.headers.indexOf(this.organizeForm.value['firstName']);
    const lastNameIndex = this.headers.indexOf(this.organizeForm.value['lastName']);
    const phoneIndex = this.headers.indexOf(this.organizeForm.value['phone']);
    const emailIndex = this.headers.indexOf(this.organizeForm.value['email']);
    this.contactsInfo.forEach(contact => {
      const newContact: Contact = this.addCustomFieldsIfNeeded({
        id: '',
        group: '',
        firstName: contact[firstNameIndex],
        lastName: contact[lastNameIndex],
        phone: this.stripDashes(contact[phoneIndex]),
        email: contact[emailIndex]
      }, contact);
      this.organizedContacts.push(newContact);
      this.contactImport.newContactList.next(this.organizedContacts);
    });
    this.finished.next();
    this.organizedContacts = [];
  }

  back(): void {
    this.goBack.next();
  }

  private addCustomFieldsIfNeeded(contact: Contact, importArray: string[]): Contact {
    let customFields: CustomField[] = [];
    this.customFields.forEach(field => {
      const fieldIndex = this.headers.indexOf(this.customFieldsForm.value[field.id]);
      customFields.push({
        id: field.id,
        name: field.name,
        value: field.type !== 'tel' ? importArray[fieldIndex] : this.stripDashes(importArray[fieldIndex])
      });
    });
    contact.customFields = customFields;
    return contact;
  }

  private stripDashes(value: string): string {
    return value.split('-').join('');
  }
  
}
