import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppealApplicationComponent } from './edit-appeal-application.component';

describe('EditAppealApplicationComponent', () => {
  let component: EditAppealApplicationComponent;
  let fixture: ComponentFixture<EditAppealApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppealApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppealApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
