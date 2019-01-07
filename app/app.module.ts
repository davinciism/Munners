import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//AngularFirebase Modules
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
import { RegisterFormComponent } from './register-form/register-form.component';



const routes: Routes = [
  {path: '', redirectTo: '/blogPosts', pathMatch: 'full'},
  {path: '', loadChildren: './blog-posts/blog-posts.module#BlogPostsModule'}
]



@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BlogPostsModule,
    CoreModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
