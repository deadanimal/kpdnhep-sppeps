import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDuplicateApplicationComponent } from './edit-duplicate-application.component';

describe('EditDuplicateApplicationComponent', () => {
  let component: EditDuplicateApplicationComponent;
  let fixture: ComponentFixture<EditDuplicateApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDuplicateApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDuplicateApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
