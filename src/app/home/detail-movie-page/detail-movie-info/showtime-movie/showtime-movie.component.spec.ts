import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeMovieComponent } from './showtime-movie.component';

describe('ShowtimeMovieComponent', () => {
  let component: ShowtimeMovieComponent;
  let fixture: ComponentFixture<ShowtimeMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
