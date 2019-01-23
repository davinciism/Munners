import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { 
    meta.addTag({name: 'description', content: 'Munners: Your social workplace to munning.'});
    meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1'}); 
  }

  addMetaTags() {
    this.meta.addTags([
       {name: 'robots', content: 'INDEX, FOLLOW'},
       {name: 'author', content: 'Head of Publishing'},
       {name: 'keywords', content: 'MUN , Model United Nations, Leadership , Politics'},
       {name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD'},
       {httpEquiv: 'Content-Type', content: 'text/html'},
       {property: 'og:title', content: "Munners"},
       {property: 'og:type', content: "website"},
       {charset: 'UTF-8'}
    ]);
  }
  
  /*
  getMetaTags() {
    let metaEl: HTMLMetaElement = this.meta.getTag('name= "keywords"');
    console.log(metaEl);
    console.log(metaEl.name);
    console.log(metaEl.content);

    let els: HTMLMetaElement[] = this.meta.getTags('name');
    els.forEach(el => {
      console.log(el);
      console.log(el.name);
      console.log(el.content);
    });
  }         
  updateMetaTags() {
    this.meta.updateTag({name: 'description', content: 'Updated: Title and Meta tags examples'});
    this.meta.updateTag({httpEquiv: 'Content-Type', content: 'application/json'}, 'httpEquiv= "Content-Type"');
    this.meta.updateTag({name: 'robots', content: 'NOINDEX, NOFOLLOW'});
    this.meta.updateTag({name: 'keywords', content: 'JavaScript, Angular'});
    this.meta.updateTag({name: 'date', content: '2018-06-03', scheme: 'YYYY-MM-DD'});
    this.meta.updateTag({name: 'author', content: 'VXYZ'});
    this.meta.updateTag({charset: 'UTF-16'}, 'charset= "UTF-8"');
    this.meta.updateTag({property: 'og:title', content: "My Text2"});
    this.meta.updateTag({property: 'og:type', content: "website"});    
  }      
  removeMetaTags() {
    //Using removeTag
    this.meta.removeTag('name = "description"');        
    this.meta.removeTag('name= "keywords"');
    this.meta.removeTag('name = "viewport"');
    this.meta.removeTag('name = "robots"');
    
    //Using removeTagElement
    let author: HTMLMetaElement = this.meta.getTag('name = "author"');
    this.meta.removeTagElement(author);
    let date: HTMLMetaElement = this.meta.getTag('name = "date"');
    this.meta.removeTagElement(date);
    let contentType: HTMLMetaElement = this.meta.getTag('httpEquiv = "Content-Type"');
    this.meta.removeTagElement(contentType);
    let charset: HTMLMetaElement = this.meta.getTag('charset');
    this.meta.removeTagElement(charset);
    let ogTitle: HTMLMetaElement = this.meta.getTag('property = "og:title"');
    this.meta.removeTagElement(ogTitle);
    let ogType: HTMLMetaElement = this.meta.getTag('property = "og:type"');          
    this.meta.removeTagElement(ogType);
  }*/       

}
