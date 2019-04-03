import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirestoreService } from './firestore.service';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';

import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollection: AngularFirestoreCollection<User>;

  constructor(private firestore: FirestoreService, private auth: AuthService) {
    this.userCollection = this.firestore.userCollection;
  }

  create(userId: string, phone: string) {
    const user: User = { id: userId, phone: phone };
    return this.userCollection.add(user);
  }

  save(user: User): Promise<void> {
    return this.userCollection.doc<User>(user.id).update(user);
  }

  profile(userId: string): Observable<User> {
    return this.userCollection.doc<User>(userId).valueChanges();
  }
}
