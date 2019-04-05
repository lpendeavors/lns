import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CustomContactField, CompanyService, Company } from 'src/app/core';

@Component({
  selector: 'lns-add-edit-contact-field',
  templateUrl: './add-edit-contact-field.component.html',
  styleUrls: ['./add-edit-contact-field.component.scss']
})
export class AddEditContactFieldComponent implements OnInit {

  private companyToSave: Company;
  private fieldToEdit: CustomContactField;
  
  contactFieldForm: FormGroup;
  fieldTypes: string[] = [
    'date',
    'email',
    'file',
    'image',
    'number',
    'tel',
    'text',
    'time',
    'url'
  ];

  constructor(public bsModalRef: BsModalRef, private company: CompanyService) { }

  ngOnInit() {
    this.contactFieldForm = new FormGroup({
      id: new FormControl(this.fieldToEdit.id, Validators.required),
      name: new FormControl(this.fieldToEdit.name, Validators.required),
      type: new FormControl(this.fieldToEdit.type, Validators.required),
      required: new FormControl(this.fieldToEdit.required, Validators.required)
    });
  }

  setIdField() {
    const nameValue = this.contactFieldForm.value['name'].split(' ').join('');
    this.contactFieldForm.controls['id'].setValue(nameValue);
  }

  saveCustomField() {
    const newField: CustomContactField = this.contactFieldForm.value;
    if (newField) {
      if (!this.companyToSave.customFields) this.companyToSave.customFields = [];
      this.companyToSave.customFields.push(newField);
      this.company.saveCompany(this.companyToSave);
      this.bsModalRef.hide();
    }
  }
  
}
