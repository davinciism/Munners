import { Component } from '@angular/core';
import { SeoService } from './core/seo.service';
import { AuthService } from './core/auth.service';

import { moveInOut } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [moveInOut]
})
export class AppComponent {
  title = 'Munners';

  constructor(private seoService: SeoService, public auth: AuthService){}

  ngOnInit(){
    this.seoService.addMetaTags();
  }

  public otherTheme: boolean = false;
  changeTheme(){
    console.log("Button Working.")
    this.otherTheme = !this.otherTheme;
  }
  
}


