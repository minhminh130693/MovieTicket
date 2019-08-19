import { Component, OnInit, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { ItemSeatComponent } from './item-seat/item-seat.component';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
import { OrderByPipe } from './../../../_core/pipes/order-by.pipe';
import { DataService } from 'src/app/_core/services/data.service';
import { StorageService } from 'src/app/_core/services/storage.service';
declare var $: any;


@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.scss'],
  providers: [OrderByPipe]
})
export class SelectSeatComponent implements OnInit {

  @Input() detailShowtime;
  @Input() listCinema;
  @Input() detailMovie;
  @Input() totalAmount;
  @Input() totalNumber;
  @Input() selectedTicket;
  @Input() selectSeat;
  @Input() user;
  @Output() backSelectTicketEvent = new EventEmitter();
  @Output() nextBookedEvent = new EventEmitter();
  @ViewChildren(ItemSeatComponent) tagListSeat: QueryList<ItemSeatComponent>;

  listAlphabet: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  listSelectedSeat: any = [];
  listSelectedSeatOrderBy: any = [];
  statusSelectedSeat: boolean = false;
  errorBuyTicket: string = '';

  constructor(
    private shareDataService: ShareDataService,
    private orderBy: OrderByPipe,
    private dataService: DataService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.storageService.watchStorage().subscribe((data: string) => {
      if (data === "UserLogin") {
        if (!localStorage.getItem(data)) {
          this.shareDataService.sharingMessageContent("Bạn đã đăng xuất, vui lòng đăng nhập để đặt vé!");
          this.showModalMessage();
        }
      }
    })
  }

  selectedSeat(objSeat) {
    if (objSeat.statusSelect) {
      if (this.listSelectedSeat.length > 0) {
        if (objSeat.seat.loaiGhe === 'Thuong') {
          let maxTicketNormal = this.findTicketType(this.selectedTicket, 'Thuong');
          maxTicketNormal = maxTicketNormal.length > 0 ? maxTicketNormal[0].number : 0;
          let ticketNormal = this.findTicketType(this.listSelectedSeat, 'Thuong');
          if (ticketNormal.length === maxTicketNormal && ticketNormal.length > 0) {
            this.findIndexSeatAndRemove(this.listSelectedSeat, ticketNormal[0].maGhe);
          }
        } else if (objSeat.seat.loaiGhe === 'Vip') {
          let maxTicketVip = this.findTicketType(this.selectedTicket, 'Vip');
          maxTicketVip = maxTicketVip.length > 0 ? maxTicketVip[0].number : 0;
          let ticketVip = this.findTicketType(this.listSelectedSeat, 'Vip');

          if (ticketVip.length === maxTicketVip && ticketVip.length > 0) {
            this.findIndexSeatAndRemove(this.listSelectedSeat, ticketVip[0].maGhe);
          }
        }
      }

      this.listSelectedSeat.push({
        maGhe: objSeat.seat.maGhe,
        stt: objSeat.seat.stt,
        seat: this.listAlphabet[objSeat.rowSeat] + objSeat.numberSeat,
        loaiGhe: objSeat.seat.loaiGhe,
        giaVe: objSeat.seat.giaVe
      });
      this.checkSelectedFullTicket();
    }
    else {
      this.findIndexSeatAndRemove(this.listSelectedSeat, objSeat.seat.maGhe);
      this.checkSelectedFullTicket();
    }
    this.listSelectedSeatOrderBy = this.orderBy.transform(this.listSelectedSeat, 'maGhe', 'asc');
  }

  findTicketType(list, valueFind) {
    return list.filter(item => {
      return (item.loaiGhe === valueFind);
    });
  }

  findIndexSeatAndRemove(list, valueFind) {
    let index = list.findIndex(item => {
      return (item.maGhe === valueFind);
    });
    if (index !== -1) {
      list.splice(index, 1);
      this.removeSelected(valueFind);
    }
  }

  removeSelected(maGhe) {
    this.tagListSeat.map(item => {
      if (item.seat.maGhe === maGhe) {
        item.statusSelect = false;
      }
    });
  }

  checkSelectedFullTicket() {
    if (this.listSelectedSeat.length === this.totalNumber) {
      this.statusSelectedSeat = true;
    } else {
      this.statusSelectedSeat = false;
    }
  }

  onFinished() {
    this.shareDataService.sharingMessageContent("Đã hết thời gian giữ ghế. Vui lòng thực hiện đặt vé lại!");
    $("#modalConfirm").modal('hide');
    this.showModalMessage();

  }

  showModalMessage() {
    $("#modalMessage").modal('show');
    $("#modalMessage").on('hidden.bs.modal', () => {
      this.backSelectTicket();
    });
  }

  backSelectTicket() {
    this.backSelectTicketEvent.emit(false);
    this.listSelectedSeat.map(item => {
      this.removeSelected(item.maGhe);
    })
    this.listSelectedSeat = [];
    this.checkSelectedFullTicket();
  }

  confirmTicketEvent(value) {
    if (value) {
      let danhSachVe = [];
      this.listSelectedSeat.map(item => {
        danhSachVe.push({ maGhe: item.maGhe, giaVe: item.giaVe })
      })

      const objBooking = {
        maLichChieu: this.detailShowtime.maLichChieu,
        danhSachVe: danhSachVe,
        taiKhoanNguoiDung: this.user.taiKhoan
      };

      const uri = "api/QuanLyDatVe/DatVe";
      this.dataService.post(uri, objBooking).subscribe(
        (data: any) => {
          if (data === 'Đặt vé thành công!') {
            this.nextBookedEvent.emit(value);
          }
        }, () => {
          this.shareDataService.sharingMessageContent("Đặt vé không thành công. Vui lòng thực hiện đặt vé lại!");
          $("#modalConfirm").modal('hide');
          this.showModalMessage();
        }
      )
    }
  }
}
