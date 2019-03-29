import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts.routing';
import { ImportContactsComponent } from './pages/import-contacts/import-contacts.component';
import { AllContactsComponent } from './pages/all-contacts/all-contacts.component';

import { SharedModule } from 'src/app/shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    SharedModule,
    ContactsRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [ 
    AllContactsComponent, 
    ImportContactsComponent, 
    AllContactsComponent
  ]
})
export class ContactsModule { }
