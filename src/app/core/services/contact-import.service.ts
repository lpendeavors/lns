import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ContactImportService {

  importList = new Subject<string[][]>();
  newContactList = new Subject<Contact[]>();

  constructor() { }
}
