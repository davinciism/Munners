import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsDetailsComponent } from './blog-posts-details.component';

describe('BlogPostsDetailsComponent', () => {
  let component: BlogPostsDetailsComponent;
  let fixture: ComponentFixture<BlogPostsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
