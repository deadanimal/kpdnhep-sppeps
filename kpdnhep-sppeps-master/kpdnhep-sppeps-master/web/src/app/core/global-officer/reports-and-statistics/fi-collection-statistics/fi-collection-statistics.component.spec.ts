import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiCollectionStatisticsComponent } from './fi-collection-statistics.component';

describe('FiCollectionStatisticsComponent', () => {
  let component: FiCollectionStatisticsComponent;
  let fixture: ComponentFixture<FiCollectionStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiCollectionStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiCollectionStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
