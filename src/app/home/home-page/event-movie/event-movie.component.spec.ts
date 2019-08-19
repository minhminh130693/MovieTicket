import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMovieComponent } from './event-movie.component';

describe('EventMovieComponent', () => {
  let component: EventMovieComponent;
  let fixture: ComponentFixture<EventMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
