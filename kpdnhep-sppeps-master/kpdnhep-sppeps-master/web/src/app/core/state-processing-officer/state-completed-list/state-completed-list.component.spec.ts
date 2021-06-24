import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCompletedListComponent } from './state-completed-list.component';

describe('StateCompletedListComponent', () => {
  let component: StateCompletedListComponent;
  let fixture: ComponentFixture<StateCompletedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCompletedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
