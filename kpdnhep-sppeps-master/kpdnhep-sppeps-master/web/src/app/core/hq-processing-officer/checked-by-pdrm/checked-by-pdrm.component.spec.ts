import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedByPdrmComponent } from './checked-by-pdrm.component';

describe('CheckedByPdrmComponent', () => {
  let component: CheckedByPdrmComponent;
  let fixture: ComponentFixture<CheckedByPdrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedByPdrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedByPdrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
