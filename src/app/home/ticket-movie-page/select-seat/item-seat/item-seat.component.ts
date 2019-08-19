import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-seat',
  templateUrl: './item-seat.component.html',
  styleUrls: ['./item-seat.component.scss']
})
export class ItemSeatComponent implements OnInit {

  @Input() seat;
  @Input() indexSeat;
  @Input() selectedTicket;
  @Output() eventSelected = new EventEmitter;

  statusSelect: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectSeat(value, row) {
    this.statusSelect = !this.statusSelect;
    const objSeat ={
      statusSelect: this.statusSelect,
      numberSeat: value,
      rowSeat: row,
      seat: this.seat
    }
    this.eventSelected.emit(objSeat);
  }

}
