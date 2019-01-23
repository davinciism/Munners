import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//To fix 404 FileNotFound Error
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


//AngularFire Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BlogPostsModule } from './blog-posts/blog-posts.module';

import { MaterialModule } from './material.module';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { BottomNavComponent } from './shared/bottom-nav/bottom-nav.component';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './account/account.component';
import { MunsComponent } from './muns/muns.component';
import { TcComponent } from './splash-screen/tc/tc.component';
import { MunsService } from './muns/muns.service';
import { JmunComponent } from './muns/jmun/jmun.component';
import { JmunDetailsComponent } from './muns/jmun/jmun-details/jmun-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/blogPosts', pathMatch: 'full'},
  {path: '', loadChildren: './blog-posts/blog-posts.module#BlogPostsModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    InfoComponent,
    AccountComponent,
    MunsComponent,
    TcComponent,
    JmunComponent,
    JmunDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,
    BlogPostsModule,
    CoreModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, MunsService],
  bootstrap: [AppComponent, routingComponents],
  entryComponents: [TcComponent]//For Terms and conditions modal
})
export class AppModule { }
