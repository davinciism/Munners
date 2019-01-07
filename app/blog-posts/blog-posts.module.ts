import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BlogPostsDashboardComponent } from './blog-posts-dashboard/blog-posts-dashboard.component';
import { BlogPostsListComponent } from './blog-posts-list/blog-posts-list.component';
import { BlogPostsDetailsComponent } from './blog-posts-details/blog-posts-details.component';
import { BlogPostsService } from './blog-posts.service';

const routes: Routes = [
  {path: 'blogPosts', component: BlogPostsListComponent},
  {path: 'blogPosts/:id', component: BlogPostsDetailsComponent},
  {path: 'dashboard', component: BlogPostsDashboardComponent}
]

@NgModule({
  declarations: [BlogPostsDashboardComponent, BlogPostsListComponent, BlogPostsDetailsComponent],
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  providers: [BlogPostsService]
})
export class BlogPostsModule { }
