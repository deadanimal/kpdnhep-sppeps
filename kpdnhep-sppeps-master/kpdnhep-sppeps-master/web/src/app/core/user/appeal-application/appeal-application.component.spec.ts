import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealApplicationComponent } from './appeal-application.component';

describe('AppealApplicationComponent', () => {
  let component: AppealApplicationComponent;
  let fixture: ComponentFixture<AppealApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppealApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppealApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
