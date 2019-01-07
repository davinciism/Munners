import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsDashboardComponent } from './blog-posts-dashboard.component';

describe('BlogPostsDashboardComponent', () => {
  let component: BlogPostsDashboardComponent;
  let fixture: ComponentFixture<BlogPostsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
