import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  @Input() detailShowtime;
  @Input() detailMovie;
  @Input() totalAmount;
  @Input() totalNumber;
  @Input() listSelectedSeatOrderBy;
  @Output() confirmEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  confirmBooking(){
    this.confirmEvent.emit(true);
    $("#modalConfirm").modal('hide');
  }
}
