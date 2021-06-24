import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePictorialComponent } from './archive-pictorial.component';

describe('ArchivePictorialComponent', () => {
  let component: ArchivePictorialComponent;
  let fixture: ComponentFixture<ArchivePictorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivePictorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePictorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
