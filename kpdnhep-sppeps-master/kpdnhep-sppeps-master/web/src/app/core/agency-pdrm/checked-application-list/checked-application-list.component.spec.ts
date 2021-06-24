import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedApplicationListComponent } from './checked-application-list.component';

describe('CheckedApplicationListComponent', () => {
  let component: CheckedApplicationListComponent;
  let fixture: ComponentFixture<CheckedApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
