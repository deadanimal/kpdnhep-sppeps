import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDocumentListComponent } from './archive-document-list.component';

describe('ArchiveDocumentListComponent', () => {
  let component: ArchiveDocumentListComponent;
  let fixture: ComponentFixture<ArchiveDocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveDocumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
