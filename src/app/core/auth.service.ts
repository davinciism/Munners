import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// import  { User } from './user';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  school?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>

  authState: any = null;

  

  constructor(public afAuth: AngularFireAuth , private router: Router, private afs: AngularFirestore) {
    this.afAuth.authState.subscribe((data => {
        this.authState = data;
      })

    )
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
    switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      } else {
        return of(null)
      }
    })
  )}

 


    
   
  get authenticated(): boolean {
    return this.authState !== null;
  }
  get currentUserId() : string {
    return this.authenticated ? this.authState.uid : '';
  }

  //Reusable fnc for different social logins
  private socialSignIn(provider){
    return this.afAuth.auth.signInWithPopup(provider)
    .then((credential) => {
      this.authState = credential.user;
      this.updateUserData(credential.user);
      this.router.navigate(['/blogPosts']);
    })
    .catch(error => console.log(error));
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })

  }

  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider;
    return this.socialSignIn(provider);
  }
  facebookLogin(){
    const provider = new firebase.auth.FacebookAuthProvider;
    return this.socialSignIn(provider);
  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    window.location.reload();
  }


  
  //Auth Guard Stuff
  isLoggednIn() {
    return this.authState !== null;
  }
  logUserOut() {
    this.router.navigate([""]);
  }
}
  
