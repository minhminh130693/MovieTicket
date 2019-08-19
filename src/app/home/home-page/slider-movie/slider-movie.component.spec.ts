import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMovieComponent } from './slider-movie.component';

describe('SliderMovieComponent', () => {
  let component: SliderMovieComponent;
  let fixture: ComponentFixture<SliderMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
