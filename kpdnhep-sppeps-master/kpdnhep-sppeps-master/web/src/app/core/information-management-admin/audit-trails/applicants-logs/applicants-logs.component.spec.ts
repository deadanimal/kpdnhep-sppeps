import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsLogsComponent } from './applicants-logs.component';

describe('ApplicantsLogsComponent', () => {
  let component: ApplicantsLogsComponent;
  let fixture: ComponentFixture<ApplicantsLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantsLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
