import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HqCompletedListComponent } from './hq-completed-list.component';

describe('HqCompletedListComponent', () => {
  let component: HqCompletedListComponent;
  let fixture: ComponentFixture<HqCompletedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HqCompletedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HqCompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
