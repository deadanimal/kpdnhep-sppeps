import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HqApplicationListComponent } from './hq-application-list.component';

describe('HqApplicationListComponent', () => {
  let component: HqApplicationListComponent;
  let fixture: ComponentFixture<HqApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HqApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HqApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
