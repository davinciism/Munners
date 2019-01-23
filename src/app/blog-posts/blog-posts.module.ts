import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogPostsDashboardComponent } from './blog-posts-dashboard/blog-posts-dashboard.component';
import { BlogPostsListComponent } from './blog-posts-list/blog-posts-list.component';
import { BlogPostsDetailsComponent } from './blog-posts-details/blog-posts-details.component';
import { BlogPostsService } from './blog-posts.service';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
  {path: 'blogPosts', component: BlogPostsListComponent, canActivate: [AuthGuard]},
  {path: 'blogPosts/:id', component: BlogPostsDetailsComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: BlogPostsDashboardComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [BlogPostsDashboardComponent, BlogPostsListComponent, BlogPostsDetailsComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, SharedModule, RouterModule.forChild(routes)
  ],
  providers: [BlogPostsService, AuthGuard]
})
export class BlogPostsModule { }
