import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedApplicationComponent } from './revised-application.component';

describe('RevisedApplicationComponent', () => {
  let component: RevisedApplicationComponent;
  let fixture: ComponentFixture<RevisedApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
