import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictorialArchiveContentComponent } from './pictorial-archive-content.component';

describe('PictorialArchiveContentComponent', () => {
  let component: PictorialArchiveContentComponent;
  let fixture: ComponentFixture<PictorialArchiveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictorialArchiveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictorialArchiveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
