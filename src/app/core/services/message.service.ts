import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Message } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: FirestoreService) { }

  get list(): Observable<Message[]> {
    return this.firestore.messageCollection.valueChanges();
  }

  create(message: Message, publish: boolean) {
    const newMessage = message;
    message.isPublished = publish;
    return this.firestore.messageCollection.add(newMessage);
  }

  save(message: Message) {
    return this.firestore.messageCollection.doc(message.id).update(message);
  }
}
