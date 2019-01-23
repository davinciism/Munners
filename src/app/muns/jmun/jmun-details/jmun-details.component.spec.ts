import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmunDetailsComponent } from './jmun-details.component';

describe('JmunDetailsComponent', () => {
  let component: JmunDetailsComponent;
  let fixture: ComponentFixture<JmunDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JmunDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JmunDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
