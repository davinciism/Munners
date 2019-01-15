import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Munners';

  constructor(public auth: AuthService){}

  public otherTheme: boolean = false;
  changeTheme(){
    console.log("Button Working.")
    this.otherTheme = !this.otherTheme;
  }
  
}


