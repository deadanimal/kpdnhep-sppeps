import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsStatusCheckComponent } from './eps-status-check.component';

describe('EpsStatusCheckComponent', () => {
  let component: EpsStatusCheckComponent;
  let fixture: ComponentFixture<EpsStatusCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpsStatusCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsStatusCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
