import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  get authenticated(): boolean {
    return this.afAuth.authState != null;
  }

  get userId(): Observable<string> {
    return this.afAuth.user.pipe(map(user => user.uid));
  }

  userCompany() {
    this.afAuth.user.subscribe(u => {
      u.getIdTokenResult()
        .then(t => console.log(t));
    });
  }

  signup(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<boolean> {
    return this.afAuth.auth.signOut().then(() => this.router.navigate(['/login']));
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  updatePaswsord(newPassword: string) {
    return this.afAuth.auth.currentUser.updatePassword(newPassword);
  }

  updateEmailAddress(newEmail: string) {
    return this.afAuth.auth.currentUser.updateEmail(newEmail);
  }
}
