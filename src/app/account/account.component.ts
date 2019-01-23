import { Component, OnInit } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { Observable } from 'rxjs';
import { User } from '../core/user';

import { moveInOut } from '../shared/animations';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [moveInOut],
  // host: {'[@moveInOut]': ''}
})


export class AccountComponent implements OnInit {

  user: User;
  photoURL: string;

  //For morning, afternoon or night
  moment: string;

  constructor(private seoService: SeoService, public auth: AuthService, private userService: UserService) { 
  }

  ngOnInit() {
    this.seoService.addMetaTags();
    this.getUser();
    this.getMoment();
  }  

  getUser(){
    const id = this.auth.authState.uid;
    return this.userService.getUserData(id).subscribe(data => this.user = data)
  }

  getMoment(): string{
    var today = new Date();
    var m = today.getMonth()+1;
    var h = today.getHours();

    if (h<12)
      return this.moment = " Morning";
    else if ( (h<4 && m>8 && m<4) || (h<5 && m<9 && m>3) )
      return this.moment = " Afternoon";
    else
      return this.moment = " Evening";
 
  }
  
}
