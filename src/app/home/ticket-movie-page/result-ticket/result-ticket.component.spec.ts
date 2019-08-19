import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTicketComponent } from './result-ticket.component';

describe('ResultTicketComponent', () => {
  let component: ResultTicketComponent;
  let fixture: ComponentFixture<ResultTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
