import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalApplicationComponent } from './renewal-application.component';

describe('RenewalApplicationComponent', () => {
  let component: RenewalApplicationComponent;
  let fixture: ComponentFixture<RenewalApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewalApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
