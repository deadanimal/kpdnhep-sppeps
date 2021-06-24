import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveInformationComponent } from './approve-information.component';

describe('ApproveInformationComponent', () => {
  let component: ApproveInformationComponent;
  let fixture: ComponentFixture<ApproveInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
