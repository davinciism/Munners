import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { BlogPost } from './blog-post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  blogPostsCollection: AngularFirestoreCollection<BlogPost>;//List of blogPosts
  blogPostDoc: AngularFirestoreDocument<BlogPost>;//Particular blogPost
  constructor(private afs: AngularFirestore) { 
    this.blogPostsCollection = this.afs.collection('blogPosts', ref =>
      ref.orderBy('published', 'desc')
    )
  }

  //To get all blog posts from the blogPostsCollection in firebase
  public getBlogPosts(){
    return this.blogPostsCollection.snapshotChanges()
    .pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as BlogPost;
        const id = a.payload.doc.id
        return {id, ...data}
      })
    }))
  }

  //To get the data of particular blogPost.
  public getBlogPostData(id:string){
    this.blogPostDoc = this.afs.doc<BlogPost>(`blogPosts/${id}`);
    return this.blogPostDoc.valueChanges();
  }

  //Create blogPost
  create(data: BlogPost){
    this.blogPostsCollection.add(data);
  }

  //To make delete fnc functionable
  getblogPost(id:string){
    return this.afs.doc<BlogPost>(`blogPosts/${id}`);
  }

  //Delete blogPost
  delete(id: string){
    return this.getblogPost(id).delete();
  }

  //Update blogPost
  update(id: string, formData){
    return this.getblogPost(id).update(formData);
  }
}
