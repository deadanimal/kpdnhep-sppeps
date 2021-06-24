import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictorialArchiveListComponent } from './pictorial-archive-list.component';

describe('PictorialArchiveListComponent', () => {
  let component: PictorialArchiveListComponent;
  let fixture: ComponentFixture<PictorialArchiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictorialArchiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictorialArchiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
