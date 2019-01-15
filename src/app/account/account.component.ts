import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { Observable } from 'rxjs';
import { User } from '../core/user';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})


export class AccountComponent implements OnInit {

  user: User;
  photoURL: string;

  constructor(public auth: AuthService, private userService: UserService) { 
  }

  ngOnInit() {
    this.getUser();
  }  

  getUser(){
    const id = this.auth.authState.uid;
    return this.userService.getUserData(id).subscribe(data => this.user = data)
  }
  /*
  updateUser(){
    const formData = {
      photoURL: this.user.photoURL,
      school: this.user.school
    }
    const id = this.auth.authState.id;
    this.userService.update(id, formData);
  }*/



}
