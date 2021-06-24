import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitApprovalPercentageComponent } from './permit-approval-percentage.component';

describe('PermitApprovalPercentageComponent', () => {
  let component: PermitApprovalPercentageComponent;
  let fixture: ComponentFixture<PermitApprovalPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitApprovalPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitApprovalPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
