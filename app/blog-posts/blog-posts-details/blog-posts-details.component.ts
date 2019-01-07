import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPostsService } from '../blog-posts.service';
import { BlogPost } from '../blog-post';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'blog-posts-details',
  templateUrl: './blog-posts-details.component.html',
  styleUrls: ['./blog-posts-details.component.scss']
})
export class BlogPostsDetailsComponent implements OnInit {

  blogPost: BlogPost;
  editing: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogPostsService: BlogPostsService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.getBlogPost();
    console.log(this);
  }

  // This fnc is for getting a particular blog post's data using its id. getBlogPostData is defined in blogPostService
  getBlogPost(){
    const id = this.route.snapshot.paramMap.get('id');
    return this.blogPostsService.getBlogPostData(id).subscribe(data => this.blogPost = data);
  }

  updateBlogPost(){
    const formData = {
      title: this.blogPost.title,
      body: this.blogPost.body
    }
    const id = this.route.snapshot.paramMap.get('id');
    this.blogPostsService.update(id, formData);
    this.editing = false;
  }
  delete(){
    const id = this.route.snapshot.paramMap.get('id');
    this.blogPostsService.delete(id);
    this.router.navigate(["/blogPosts"])
  }
}
