import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleRatingMovieComponent } from './circle-rating-movie.component';

describe('CircleRatingMovieComponent', () => {
  let component: CircleRatingMovieComponent;
  let fixture: ComponentFixture<CircleRatingMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleRatingMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleRatingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
