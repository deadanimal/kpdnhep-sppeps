import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HqApplicationInformationComponent } from './hq-application-information.component';

describe('HqApplicationInformationComponent', () => {
  let component: HqApplicationInformationComponent;
  let fixture: ComponentFixture<HqApplicationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HqApplicationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HqApplicationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
