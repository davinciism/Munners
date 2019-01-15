import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from '../../core/user';
import { AppComponent } from '../../app.component';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( public auth: AuthService) {   }
  

  ngOnInit() {
    
  }
  

  public otherTheme: boolean = false;
  public changeTheme(){
    console.log("Toggle Working.")
    this.otherTheme = !this.otherTheme;
  }
  
}

