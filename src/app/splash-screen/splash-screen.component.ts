import { Component, OnInit, HostBinding } from '@angular/core';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  // animations: [moveIn(), fallIn(), moveInLeft()],
  // host: {'[@moveIn]': ''}

})
export class SplashScreenComponent implements OnInit {

  error: any;

  constructor(public afAuth: AngularFireAuth , private router: Router, public auth: AuthService) {

    this.afAuth.authState.subscribe(data => {
      if(data){
        this.router.navigateByUrl('/blogPosts');
      }
    })

  }

  ngOnInit() {
  }


}
