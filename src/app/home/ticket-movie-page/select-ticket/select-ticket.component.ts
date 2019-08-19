import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, animate, transition, style, keyframes } from '@angular/animations'
import { StorageService } from 'src/app/_core/services/storage.service';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';

@Component({
  selector: 'app-select-ticket',
  templateUrl: './select-ticket.component.html',
  styleUrls: ['./select-ticket.component.scss'],
  animations: [
    trigger('animationAmount', [
      transition('* => *', [
        animate('1s ease-out', keyframes([
          style({ 'font-size': '20px' }),
          style({ 'font-size': '24px' }),
          style({ 'font-size': '20px' })
        ]))
      ])
    ])
  ]
})
export class SelectTicketComponent implements OnInit {

  @Input() detailShowtime;
  @Input() detailMovie;
  @Input() listCinema;
  @Output() eventSelectSeatButton = new EventEmitter();
  
  totalAmount: number = 0;
  totalNumber: number = 0;
  statusLogin: boolean = false;
  objSelectedTicket: any = [];
  user: any;

  constructor(private storageService: StorageService, private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.getUser();

    this.storageService.watchStorage().subscribe((data: string) => {
      if (data === "UserLogin") {
        this.getUser();
      }
    })
  }

  getTotalAmount(value) {
    this.totalAmount = value.total;
    this.totalNumber = value.number;
    this.objSelectedTicket = value.detail;
  }

  getUser() {
    if (localStorage.getItem("UserLogin")) {
      this.statusLogin = true;
      this.user = JSON.parse(localStorage.getItem("UserLogin"));
    }
    else { this.statusLogin = false; }
  }

  selectSeat() {
    const objTicket: object = {
      statusSelectedSeat: true,
      totalAmount: this.totalAmount,
      totalNumber: this.totalNumber,
      selectedTicket: this.objSelectedTicket,
      user: this.user
    }
    this.eventSelectSeatButton.emit(objTicket);
  }

  viewTrailer() {
    this.shareDataService.sharingTrailerMovie(this.detailMovie.trailer);
  }

  showMessage() {
    this.shareDataService.sharingMessageContent("Vui lòng đăng nhập để chọn ghế!");
  }
}
