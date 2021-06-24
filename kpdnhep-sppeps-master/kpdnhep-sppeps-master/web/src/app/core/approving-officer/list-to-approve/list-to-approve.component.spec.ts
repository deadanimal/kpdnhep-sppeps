import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToApproveComponent } from './list-to-approve.component';

describe('ListToApproveComponent', () => {
  let component: ListToApproveComponent;
  let fixture: ComponentFixture<ListToApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListToApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListToApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
