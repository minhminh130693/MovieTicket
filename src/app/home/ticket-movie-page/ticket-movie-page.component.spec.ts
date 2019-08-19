import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMoviePageComponent } from './ticket-movie-page.component';

describe('TicketMoviePageComponent', () => {
  let component: TicketMoviePageComponent;
  let fixture: ComponentFixture<TicketMoviePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMoviePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
