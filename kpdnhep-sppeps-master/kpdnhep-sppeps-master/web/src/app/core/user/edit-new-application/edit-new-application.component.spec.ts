import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewApplicationComponent } from './edit-new-application.component';

describe('EditNewApplicationComponent', () => {
  let component: EditNewApplicationComponent;
  let fixture: ComponentFixture<EditNewApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
