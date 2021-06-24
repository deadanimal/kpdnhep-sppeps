import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportApplicationInformationComponent } from './support-application-information.component';

describe('SupportApplicationInformationComponent', () => {
  let component: SupportApplicationInformationComponent;
  let fixture: ComponentFixture<SupportApplicationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportApplicationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportApplicationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
