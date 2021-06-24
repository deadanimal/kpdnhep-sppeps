import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistApplicationComponent } from './blacklist-application.component';

describe('BlacklistApplicationComponent', () => {
  let component: BlacklistApplicationComponent;
  let fixture: ComponentFixture<BlacklistApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
