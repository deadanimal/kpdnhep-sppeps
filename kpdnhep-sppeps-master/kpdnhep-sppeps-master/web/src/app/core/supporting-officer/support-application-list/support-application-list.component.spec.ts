import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportApplicationListComponent } from './support-application-list.component';

describe('SupportApplicationListComponent', () => {
  let component: SupportApplicationListComponent;
  let fixture: ComponentFixture<SupportApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
