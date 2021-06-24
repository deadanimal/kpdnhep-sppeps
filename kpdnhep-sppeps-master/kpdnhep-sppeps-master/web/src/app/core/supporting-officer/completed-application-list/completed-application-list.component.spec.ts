import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedApplicationListComponent } from './completed-application-list.component';

describe('CompletedApplicationListComponent', () => {
  let component: CompletedApplicationListComponent;
  let fixture: ComponentFixture<CompletedApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
