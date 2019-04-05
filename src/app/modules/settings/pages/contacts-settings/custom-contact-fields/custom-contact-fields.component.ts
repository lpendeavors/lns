import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CustomContactField, CompanyService, Company } from 'src/app/core';

import { AddEditContactFieldComponent } from 'src/app/shared/components/add-edit-contact-field/add-edit-contact-field.component';

import { Subscription } from 'rxjs';

@Component({
  selector: 'lns-custom-contact-fields',
  templateUrl: './custom-contact-fields.component.html',
  styleUrls: ['./custom-contact-fields.component.scss']
})
export class CustomContactFieldsComponent implements OnInit, OnDestroy {

  private customContactFieldsSubscription: Subscription;
  private companyToSave: Company;

  customFields: CustomContactField[] = [];

  constructor(private modalService: BsModalService, private company: CompanyService) { }

  ngOnInit() {
    this.customContactFieldsSubscription = this.company.getCompanyById('1')
      .subscribe(company => {
        this.companyToSave = company;
        this.customFields = company.customFields;
      });
  }

  ngOnDestroy() {
    if (this.customContactFieldsSubscription) {
      this.customContactFieldsSubscription = null;
    }
  }

  addField(): void {
    const newField: CustomContactField = { id: '', name: '', type: '', required: true };
    const initialState = {
      companyToSave: this.companyToSave,
      fieldToEdit: newField,
      addField: true
    };
    this.modalService.show(AddEditContactFieldComponent, {initialState});
  }

}
