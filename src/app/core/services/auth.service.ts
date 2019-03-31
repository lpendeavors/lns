import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: firebase.User;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => this.currentUser = user);
  }

  get authenticated(): boolean {
    return this.afAuth.authState != null;
  }

  signup(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut().then(() => this.router.navigate(['/login']));
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
