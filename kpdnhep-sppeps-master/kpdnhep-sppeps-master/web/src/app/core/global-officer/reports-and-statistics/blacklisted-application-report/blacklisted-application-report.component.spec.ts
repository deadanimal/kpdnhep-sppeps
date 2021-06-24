import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistedApplicationReportComponent } from './blacklisted-application-report.component';

describe('BlacklistedApplicationReportComponent', () => {
  let component: BlacklistedApplicationReportComponent;
  let fixture: ComponentFixture<BlacklistedApplicationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistedApplicationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistedApplicationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
