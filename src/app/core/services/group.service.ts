import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Group } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private firestore: FirestoreService) { }
  
  get list(): Observable<Group[]> {
    return this.firestore.groupCollection.valueChanges();
  }

  create(group: Group) {
    return this.firestore.groupCollection.add(group);
  }

  save(group: Group) {
    return this.firestore.groupCollection.doc(group.id).update(group);
  }
}
