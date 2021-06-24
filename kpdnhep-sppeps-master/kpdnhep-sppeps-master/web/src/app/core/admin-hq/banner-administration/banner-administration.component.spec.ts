import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAdministrationComponent } from './banner-administration.component';

describe('BannerAdministrationComponent', () => {
  let component: BannerAdministrationComponent;
  let fixture: ComponentFixture<BannerAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
