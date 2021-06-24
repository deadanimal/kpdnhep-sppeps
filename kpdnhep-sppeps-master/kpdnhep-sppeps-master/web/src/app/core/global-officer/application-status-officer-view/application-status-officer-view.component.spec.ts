import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStatusOfficerViewComponent } from './application-status-officer-view.component';

describe('ApplicationStatusOfficerViewComponent', () => {
  let component: ApplicationStatusOfficerViewComponent;
  let fixture: ComponentFixture<ApplicationStatusOfficerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationStatusOfficerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationStatusOfficerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
