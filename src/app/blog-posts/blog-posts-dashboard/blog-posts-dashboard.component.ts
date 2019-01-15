import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { BlogPostsService } from '../blog-posts.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask  } from 'angularfire2/storage';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'blog-posts-dashboard',
  templateUrl: './blog-posts-dashboard.component.html',
  styleUrls: ['./blog-posts-dashboard.component.scss']
})
export class BlogPostsDashboardComponent implements OnInit {

  title: string;
  image: string;
  body: string;

  //For button text
  buttonText: string = 'Create Blog Post';

  //For image uploading
  uploadPercent: Observable<number>;
  downloadUrl: Observable<string | null>;

  constructor(private auth: AuthService, private blogPostsService: BlogPostsService, private storage: AngularFireStorage, private router: Router) { }

  ngOnInit() {
  }

  createBlogPost(){
    const data = {
      author : this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      body : this.body,
      image : this.image || null,
      published : new Date(),
      title : this.title,
    };
    this.blogPostsService.create(data);
    
    //Reseting form after blogpost created
    this.title= '';
    this.body= '';
    this.image = '';
    this.buttonText = "Blog Post Created!"

    //Resetting button text after 3seconds of post creation
    setTimeout(() => {
      (this.buttonText="Create Blog Post");
      this.router.navigate([ 'blogPosts' ]);
      }, 3000)
    }
  
  //For uploading image
  uploadImage(event){
    const file = event.target.files[0];
    const filePath = `blogPosts/${file.name}`;
    if (file.type.split('/')[0] !== 'image') {
      return alert('Only images, please!')
    }
    else{
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      //Observe percent changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadUrl = fileRef.getDownloadURL();
          this.downloadUrl.subscribe(url => (this.image = url));
        })
      )
      .subscribe()
    }
  }
}
