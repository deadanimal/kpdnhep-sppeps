import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitHolderStatisticsComponent } from './permit-holder-statistics.component';

describe('PermitHolderStatisticsComponent', () => {
  let component: PermitHolderStatisticsComponent;
  let fixture: ComponentFixture<PermitHolderStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitHolderStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitHolderStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
