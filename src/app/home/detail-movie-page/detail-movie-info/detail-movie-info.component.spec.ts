import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMovieInfoComponent } from './detail-movie-info.component';

describe('DetailMovieInfoComponent', () => {
  let component: DetailMovieInfoComponent;
  let fixture: ComponentFixture<DetailMovieInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMovieInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMovieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
