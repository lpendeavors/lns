import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  get authenticated(): boolean {
    return this.afAuth.authState != null;
  }

  get currentUser() {
    return of(this.afAuth.auth.currentUser);
  }

  signup(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/login']));
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  updatePaswsord(newPassword: string) {
    return this.afAuth.auth.currentUser.updatePassword(newPassword);
  }

  updateEmailAddress(newEmail: string) {
    return this.afAuth.auth.currentUser.updateEmail(newEmail);
  }
}
