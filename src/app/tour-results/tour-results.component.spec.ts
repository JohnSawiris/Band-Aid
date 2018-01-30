import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourResultsComponent } from './tour-results.component';

describe('TourResultsComponent', () => {
  let component: TourResultsComponent;
  let fixture: ComponentFixture<TourResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
