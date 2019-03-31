import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Company } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private firestore: FirestoreService) { }

  getCompanyById(companyId: string): Observable<Company> {
    return this.firestore.companyCollection.doc<Company>(companyId).valueChanges();
  }

  saveCompany(company: Company) {
    if (company.id.length === 0) {
      this.firestore.companyCollection.add(company)
        .then(newCompany => console.log("Company created"))
        .catch(err => console.log("Error"));
    } else {
      this.firestore.companyCollection.doc(company.id).update(company);
    }
  }
}
