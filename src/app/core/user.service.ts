import { Injectable } from '@angular/core';
import { AuthService } from './auth.service'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //List of Users
  usersCollection: AngularFirestoreCollection<User>;
  //Particular User
  userDoc: AngularFirestoreDocument<User>;

  constructor(private auth: AuthService, private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users')
      
   }

  // addUser(){
  //   this.usersCollection.add(User);
  // }

  //To get the data of a particular User
  public getUserData(id: string){
    this.userDoc = this.afs.doc<User>(`users/${id}`);
    return this.userDoc.valueChanges();
  } 

  //create user
  create(data: User){
      this.usersCollection.add(data);
    
  }

  //To make delete fnc functionable
  public getUser(id: string){
    return this.afs.doc<User>(`users/${id}`);
  }

  //Delete User
  delete(id: string){
    return this.getUser(id).delete();
  }

  //Update User
  update(id: string, userData){
    return this.getUser(id).update(userData);
  }


  

}
