import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMovieComponent } from './ticket-movie.component';

describe('TicketMovieComponent', () => {
  let component: TicketMovieComponent;
  let fixture: ComponentFixture<TicketMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
