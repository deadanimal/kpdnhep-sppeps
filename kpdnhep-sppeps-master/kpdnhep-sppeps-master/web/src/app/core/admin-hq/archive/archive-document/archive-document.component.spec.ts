import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDocumentComponent } from './archive-document.component';

describe('ArchiveDocumentComponent', () => {
  let component: ArchiveDocumentComponent;
  let fixture: ComponentFixture<ArchiveDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
