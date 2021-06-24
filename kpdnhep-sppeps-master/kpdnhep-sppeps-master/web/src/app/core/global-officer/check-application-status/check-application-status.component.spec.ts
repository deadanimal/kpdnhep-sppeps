import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckApplicationStatusComponent } from './check-application-status.component';

describe('CheckApplicationStatusComponent', () => {
  let component: CheckApplicationStatusComponent;
  let fixture: ComponentFixture<CheckApplicationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckApplicationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
