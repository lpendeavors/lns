import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Segment } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  constructor(private firestore: FirestoreService) { }

  get list(): Observable<Segment[]> {
    return this.firestore.segmentCollection.valueChanges();
  }

  create(segment: Segment) {
    return this.firestore.segmentCollection.add(segment);
  }

  save(segment: Segment) {
    return this.firestore.segmentCollection.doc(segment.id).update(segment);
  }
}
