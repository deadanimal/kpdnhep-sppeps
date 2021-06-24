import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementAdministrationComponent } from './announcement-administration.component';

describe('AnnouncementAdministrationComponent', () => {
  let component: AnnouncementAdministrationComponent;
  let fixture: ComponentFixture<AnnouncementAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
