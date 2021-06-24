import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcCheckComponent } from './ic-check.component';

describe('IcCheckComponent', () => {
  let component: IcCheckComponent;
  let fixture: ComponentFixture<IcCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
