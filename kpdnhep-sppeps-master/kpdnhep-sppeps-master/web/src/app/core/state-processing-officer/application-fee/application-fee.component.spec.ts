import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFeeComponent } from './application-fee.component';

describe('ApplicationFeeComponent', () => {
  let component: ApplicationFeeComponent;
  let fixture: ComponentFixture<ApplicationFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
