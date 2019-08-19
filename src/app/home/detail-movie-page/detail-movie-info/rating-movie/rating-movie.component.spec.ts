import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingMovieComponent } from './rating-movie.component';

describe('RatingMovieComponent', () => {
  let component: RatingMovieComponent;
  let fixture: ComponentFixture<RatingMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
