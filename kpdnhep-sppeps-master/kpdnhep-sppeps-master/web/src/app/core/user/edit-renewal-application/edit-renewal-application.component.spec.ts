import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRenewalApplicationComponent } from './edit-renewal-application.component';

describe('EditRenewalApplicationComponent', () => {
  let component: EditRenewalApplicationComponent;
  let fixture: ComponentFixture<EditRenewalApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRenewalApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRenewalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
