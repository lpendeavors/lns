import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import { DragulaModule } from 'ng2-dragula';

import { environment } from 'src/environments/environment';

import { AddEditContactComponent } from './components/add-edit-contact/add-edit-contact.component';
import { AddEditGroupComponent } from './components/add-edit-group/add-edit-group.component';
import { AddEditSegmentComponent } from './components/add-edit-segment/add-edit-segment.component';
import { AddEditContactFieldComponent } from './components/add-edit-contact-field/add-edit-contact-field.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AddEditProfileComponent } from './components/add-edit-profile/add-edit-profile.component';
import { GeneralInfoModalComponent } from './components/general-info-modal/general-info-modal.component';

import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    ModalModule.forRoot(),
    DragulaModule.forRoot()
  ],
  declarations: [
    AddEditContactComponent, 
    AddEditGroupComponent, 
    AddEditSegmentComponent, 
    AddEditContactFieldComponent, 
    TermsOfUseComponent, 
    PrivacyPolicyComponent, 
    AddEditProfileComponent, 
    GeneralInfoModalComponent,
    SearchPipe
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AddEditContactComponent,
    AddEditContactFieldComponent,
    TermsOfUseComponent, 
    PrivacyPolicyComponent, 
    AddEditProfileComponent, 
    GeneralInfoModalComponent,
    SearchPipe
  ],
  entryComponents: [
    AddEditContactComponent,
    AddEditContactFieldComponent,
    AddEditProfileComponent
  ]
})
export class SharedModule { }
