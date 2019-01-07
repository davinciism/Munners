import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  constructor(public afAuth: AngularFireAuth , private router: Router) {
    this.afAuth.authState.subscribe((data => this.authState = data));
    
   }
   
  get authenticated(): boolean {
    return this.authState !== null;
  }
  get currentUserId() : string {
    return this.authenticated ? this.authState.uid : '';
  }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/'])
  }
}
