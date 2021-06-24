import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePictorialListComponent } from './archive-pictorial-list.component';

describe('ArchivePictorialListComponent', () => {
  let component: ArchivePictorialListComponent;
  let fixture: ComponentFixture<ArchivePictorialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivePictorialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePictorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
