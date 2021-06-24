import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationHistoryReportComponent } from './application-history-report.component';

describe('ApplicationHistoryReportComponent', () => {
  let component: ApplicationHistoryReportComponent;
  let fixture: ComponentFixture<ApplicationHistoryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationHistoryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationHistoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
