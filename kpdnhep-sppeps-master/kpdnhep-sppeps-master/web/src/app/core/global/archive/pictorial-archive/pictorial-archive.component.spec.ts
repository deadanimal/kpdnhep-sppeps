import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictorialArchiveComponent } from './pictorial-archive.component';

describe('PictorialArchiveComponent', () => {
  let component: PictorialArchiveComponent;
  let fixture: ComponentFixture<PictorialArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictorialArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictorialArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
