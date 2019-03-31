import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirestoreService } from './firestore.service';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollection: AngularFirestoreCollection;

  userProfileRef: AngularFirestoreDocument;
  userProfile: User;

  constructor(private firestore: FirestoreService, private auth: AuthService) {
    this.userCollection = this.firestore.companyCollection;
  }

  createUser(userId: string, phone: string) {
    const user: User = {
      id: userId,
      companyId: "",
      firstName: "",
      lastName: "",
      phone: phone
    };
    return this.userCollection.add(user);
  }

  saveUser(user: User) {
    this.userProfileRef.update(user);
  }
}
