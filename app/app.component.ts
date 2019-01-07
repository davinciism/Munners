import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MunnersApp';

  public otherTheme: boolean = false;
    changeTheme(){
    console.log("Button Working.")
    this.otherTheme = !this.otherTheme;
    }
  
  }


