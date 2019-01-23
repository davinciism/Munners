import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmunComponent } from './jmun.component';

describe('JmunComponent', () => {
  let component: JmunComponent;
  let fixture: ComponentFixture<JmunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JmunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JmunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
