import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts.routing';
import { ImportContactsComponent } from './pages/import-contacts/import-contacts.component';
import { AllContactsComponent } from './pages/all-contacts/all-contacts.component';

import { SharedModule } from 'src/app/shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ContactService, ContactImportService } from 'src/app/core';
import { FileUploadComponent } from './pages/import-contacts/file-upload/file-upload.component';
import { OrganizeComponent } from './pages/import-contacts/organize/organize.component';
import { ConfirmImportComponent } from './pages/import-contacts/confirm-import/confirm-import.component';

@NgModule({
  imports: [
    SharedModule,
    ContactsRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [ 
    AllContactsComponent, 
    ImportContactsComponent, 
    AllContactsComponent, 
    FileUploadComponent, 
    OrganizeComponent, 
    ConfirmImportComponent
  ],
  providers: [
    ContactService,
    ContactImportService
  ]
})
export class ContactsModule { }
