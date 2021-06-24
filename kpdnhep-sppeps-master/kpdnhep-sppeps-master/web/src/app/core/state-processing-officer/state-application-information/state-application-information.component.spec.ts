import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateApplicationInformationComponent } from './state-application-information.component';

describe('StateApplicationInformationComponent', () => {
  let component: StateApplicationInformationComponent;
  let fixture: ComponentFixture<StateApplicationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateApplicationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateApplicationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
