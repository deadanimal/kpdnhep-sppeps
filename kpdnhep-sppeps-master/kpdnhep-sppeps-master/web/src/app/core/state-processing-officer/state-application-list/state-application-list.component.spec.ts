import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateApplicationListComponent } from './state-application-list.component';

describe('StateApplicationListComponent', () => {
  let component: StateApplicationListComponent;
  let fixture: ComponentFixture<StateApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
