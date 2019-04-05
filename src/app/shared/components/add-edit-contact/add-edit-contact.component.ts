import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Contact, Group, GroupService, ContactService, Company, CompanyService, CustomContactField, CustomField } from 'src/app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss']
})
export class AddEditContactComponent implements OnInit, OnDestroy {

  private companySubscription: Subscription;
  private groupListSubscription: Subscription;

  private companyToLookup: Company;
  private contactToEdit: Contact;
  private addContact: boolean;
  private editContact: boolean;
  
  groups: Group[] = [];
  contactForm: FormGroup;
  hasCustomFields: boolean;
  customFieldsForm: FormGroup;
  customFields: CustomContactField[];
  contactError: string;
  groupError: string;

  constructor(public bsModalRef: BsModalRef, private group: GroupService, private contact: ContactService,
    private company: CompanyService) { }

  get allFormsValid(): boolean {
    if (this.hasCustomFields) {
      return this.contactForm.valid && this.customFieldsForm.valid;
    } else {
      return this.contactForm.valid;
    }
  }

  ngOnInit() {
    this.groupListSubscription = this.group.list.subscribe(list => this.groups = list);
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
        if (this.editContact && this.contactToEdit.customFields) {
          this.contactToEdit.customFields.forEach(field => {
            this.customFieldsForm.controls[field.id].setValue(field.value);
          });
        }
      }
    });
    this.contactForm = new FormGroup({
      id: new FormControl(this.contactToEdit.id),
      firstName: new FormControl(this.contactToEdit.firstName, Validators.required),
      lastName: new FormControl(this.contactToEdit.lastName, Validators.required),
      phone: new FormControl(this.contactToEdit.phone, [Validators.required, Validators.pattern('[0-9]{3}[0-9]{3}[0-9]{4}')]),
      email: new FormControl(this.contactToEdit.email, Validators.required),
      group: new FormControl(this.contactToEdit.group)
    });
  }

  ngOnDestroy() {
    if (this.groupListSubscription) {
      this.groupListSubscription.unsubscribe();
    }
    if (this.companySubscription) {
      this.companySubscription.unsubscribe();
    }
  }

  saveContact(): void {
    this.groupError = null;
    this.contactError = null;

    if(this.editContact) {
      this.update(this.addCustomFieldsIfNeeded(this.contactForm.value));
    } else if (this.addContact) {
      this.create(this.addCustomFieldsIfNeeded(this.contactForm.value));
    }
  }

  private create(contact: Contact) {
    this.contact.create(contact)
      .then(() => this.bsModalRef.hide())
      .catch(err => this.contactError = err);
  }

  private update(contact: Contact) {
    this.contact.update(contact)
      .then(() => this.bsModalRef.hide())
      .catch(err => this.contactError = err);
  }

  private addCustomFieldsIfNeeded(contact: Contact): Contact {
    let customFields: CustomField[] = [];
    this.customFields.forEach(field => {
      customFields.push({
        id: field.id,
        name: field.name,
        value: this.customFieldsForm.value[field.id]
      });
    });
    contact.customFields = customFields;
    return contact;
  }
}
