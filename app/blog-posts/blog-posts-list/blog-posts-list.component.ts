import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogPost } from '../blog-post';
import { BlogPostsService } from '../blog-posts.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'blog-posts-list',
  templateUrl: './blog-posts-list.component.html',
  styleUrls: ['./blog-posts-list.component.scss']
})
export class BlogPostsListComponent implements OnInit {
  blogPosts: Observable<BlogPost[]>

  constructor(private blogPostService: BlogPostsService, public auth: AuthService) { }

  ngOnInit() {
    this.blogPosts = this.blogPostService.getBlogPosts()
    console.log(this);
  }

  delete(id: string){
    this.blogPostService.delete(id);
  }
}
