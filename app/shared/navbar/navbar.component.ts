import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( public auth: AuthService) { }

  ngOnInit() {
    
  }
  public otherTheme: boolean = false;
    public changeTheme(){
    console.log("Toggle Working.")
    this.otherTheme = !this.otherTheme;
    }
  
  }

