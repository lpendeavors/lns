import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  userCollection: AngularFirestoreCollection;
  companyCollection: AngularFirestoreCollection;
  contactCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users'); 
    this.companyCollection = this.afs.collection("companies");
    this.contactCollection = this.afs.collection("contacts");
  }
}
