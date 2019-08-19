import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMovieTopComponent } from './detail-movie-top.component';

describe('DetailMovieTopComponent', () => {
  let component: DetailMovieTopComponent;
  let fixture: ComponentFixture<DetailMovieTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMovieTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMovieTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
