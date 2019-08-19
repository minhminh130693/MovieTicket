import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTicketComponent } from './item-ticket.component';

describe('ItemTicketComponent', () => {
  let component: ItemTicketComponent;
  let fixture: ComponentFixture<ItemTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
