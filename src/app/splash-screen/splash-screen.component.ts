import { Component, OnInit, HostBinding } from '@angular/core';
import { NgModule } from '@angular/core';
import { SeoService } from './../core/seo.service';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material';
import { TcComponent } from './tc/tc.component';

import { scaleDown } from './../shared/animations';
import { moveInOut } from './../shared/animations';


@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  // animations: [moveIn(), fallIn(), moveInLeft()],
  // host: {'[@moveIn]': ''}
  animations: [
    scaleDown, moveInOut
  ],
  // host: {'[@moveInOut]': ''}
})
export class SplashScreenComponent implements OnInit {

  error: any;

  constructor(private seoService: SeoService, public afAuth: AngularFireAuth , private router: Router, public auth: AuthService, public dialog: MatDialog) {

    this.afAuth.authState.subscribe(data => {
      if(data){
        this.router.navigateByUrl('/blogPosts');
      }
    })

  }

  ngOnInit() {
    this.seoService.addMetaTags();
  }

  openDialog() {
    const dialogRef = this.dialog.open(TcComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }



}

