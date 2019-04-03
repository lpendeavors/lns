import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirestoreService } from './firestore.service';

import { Contact } from 'src/app/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore: FirestoreService) { }

  list(): Observable<Contact[]> {
    return this.firestore.contactCollection.valueChanges();
  }

  listByGroupId(groupId: string) {
    
  }

  byCompany(companyId: string) {
    
  }

  create(contact: Contact) {
    return this.firestore.contactCollection.add(contact);
  }

  createMultiple(contacts: Contact[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      contacts.forEach(contact => this.create(contact));
      resolve(true);
    });
  }

  update(contact: Contact) {
    return this.firestore.contactCollection.doc(contact.id).update(contact);
  }

}
