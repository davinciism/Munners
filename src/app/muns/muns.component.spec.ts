import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunsComponent } from './muns.component';

describe('MunsComponent', () => {
  let component: MunsComponent;
  let fixture: ComponentFixture<MunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
