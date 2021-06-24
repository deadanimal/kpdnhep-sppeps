import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentArchiveListComponent } from './document-archive-list.component';

describe('DocumentArchiveListComponent', () => {
  let component: DocumentArchiveListComponent;
  let fixture: ComponentFixture<DocumentArchiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentArchiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentArchiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
