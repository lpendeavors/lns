import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User, Company, Contact, Group, Segment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  userCollection: AngularFirestoreCollection<User>;
  companyCollection: AngularFirestoreCollection<Company>;
  contactCollection: AngularFirestoreCollection<Contact>;
  groupCollection: AngularFirestoreCollection<Group>;
  segmentCollection: AngularFirestoreCollection<Segment>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<User>('users'); 
    this.companyCollection = this.afs.collection<Company>("companies");
    this.contactCollection = this.afs.collection<Contact>("contacts");
    this.groupCollection = this.afs.collection<Group>("groups");
    this.segmentCollection = this.afs.collection<Segment>("segments");
  }
}
