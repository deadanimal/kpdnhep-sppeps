import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedInformationComponent } from './approved-information.component';

describe('ApprovedInformationComponent', () => {
  let component: ApprovedInformationComponent;
  let fixture: ComponentFixture<ApprovedInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
