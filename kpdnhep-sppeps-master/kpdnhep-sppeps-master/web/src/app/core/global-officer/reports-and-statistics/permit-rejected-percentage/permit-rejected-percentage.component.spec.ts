import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitRejectedPercentageComponent } from './permit-rejected-percentage.component';

describe('PermitRejectedPercentageComponent', () => {
  let component: PermitRejectedPercentageComponent;
  let fixture: ComponentFixture<PermitRejectedPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitRejectedPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitRejectedPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
