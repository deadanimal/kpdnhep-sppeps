import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAdministrationComponent } from './faq-administration.component';

describe('FaqAdministrationComponent', () => {
  let component: FaqAdministrationComponent;
  let fixture: ComponentFixture<FaqAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
