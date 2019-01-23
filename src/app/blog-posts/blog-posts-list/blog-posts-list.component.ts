import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../blog-post';
import { BlogPostsService } from '../blog-posts.service';
import { AuthService } from '../../core/auth.service';
import {  Router } from '@angular/router';
// import { moveIn, fallIn, moveInLeft } from '../../shared/router.animation';
import { listStagger } from '../../shared/animations';
import { moveInOut } from '../../shared/animations';

@Component({
  selector: 'blog-posts-list',
  templateUrl: './blog-posts-list.component.html',
  styleUrls: ['./blog-posts-list.component.scss'],
  // animations: [moveIn(), fallIn(), moveInLeft()],
  // host: {'[@moveIn]': ''}
  animations: [moveInOut],
  // host: {'[@moveInOut]': ''}
})


export class BlogPostsListComponent implements OnInit {

  blogPosts: Observable<BlogPost[]>

  constructor(private seoservice: SeoService, private blogPostService: BlogPostsService, public auth: AuthService, private router: Router) { }


  ngOnInit() {
    this.seoservice.addMetaTags();
    this.blogPosts = this.blogPostService.getBlogPosts()
    // console.log(this);
  }

  delete(id: string){
    this.blogPostService.delete(id);
  }

  takeToDetail(id: string){
    this.router.navigate([ `blogPosts/${id}` ]);
  }
}
