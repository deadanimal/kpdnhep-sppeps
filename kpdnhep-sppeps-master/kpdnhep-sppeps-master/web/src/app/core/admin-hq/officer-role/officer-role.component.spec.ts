import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerRoleComponent } from './officer-role.component';

describe('OfficerRoleComponent', () => {
  let component: OfficerRoleComponent;
  let fixture: ComponentFixture<OfficerRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
