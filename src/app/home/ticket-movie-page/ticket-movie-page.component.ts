import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { Subscription } from 'rxjs';
import { trigger, state, transition, animate, style } from '@angular/animations';
declare var $: any;

@Component({
  selector: 'app-ticket-movie-page',
  templateUrl: './ticket-movie-page.component.html',
  styleUrls: ['./ticket-movie-page.component.scss'],
  animations: [trigger('slideInOut', [
    state('true', style({ height: '*', opacity: '1', display: 'block' })),
    state('false', style({ height: '0px', opacity: '0', display: 'none' })),
    transition('true => false', [animate('0.5s ease-out')]),
    transition('false => true', [animate('0.5s ease-in')])
  ])]
})
export class TicketMoviePageComponent implements OnInit {

  maLichChieu: number;
  maPhim: string;
  detailShowtime: any = [];
  detailMovie: any = [];
  listCinema: any = [];
  subDetailShowtime: any = new Subscription();
  subDetailMovie: any = new Subscription();
  subListCinema: any = new Subscription();
  selectTicket: boolean = true;
  selectSeat: boolean = false;
  resultTicket: boolean = false;
  totalAmount: number = 0;
  totalNumber: number = 0;
  selectedTicket: any = [];
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getParamsFromURL();
    this.getDetailRoom();
    this.getDetailMovie();
    this.getListCinema();
  }

  getParamsFromURL() {
    this.maLichChieu = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    this.activatedRoute.queryParams.subscribe((param: any) => {
      this.maPhim = param.maPhim;
    })
  }

  getDetailRoom() {
    const uri = `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.maLichChieu}`;
    setTimeout(() => {
      this.subDetailShowtime = this.dataService.get(uri).subscribe((data: any) => {
        this.detailShowtime = data;
      }, () => { this.router.navigate(["/"]); })
    }, 0)
  }

  getDetailMovie() {
    const uri = `api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
    setTimeout(() => {
      this.subDetailMovie = this.dataService.get(uri).subscribe((data: any) => {
        let index = data.lichChieu.findIndex(item => item.maLichChieu === this.maLichChieu);
        if (index !== -1) {
          this.detailMovie = data;
        } else {
          this.router.navigate(["/"]);
        }
      }, () => { this.router.navigate(["/"]); })
    }, 0)
  }

  getListCinema() {
    const uri = 'api/QuanLyRap/LayThongTinHeThongRap';
    setTimeout(() => {
      this.subListCinema = this.dataService.get(uri).subscribe((data: any) => {
        this.listCinema = data;
      })
    }, 0)
  }

  selectSeatEvent(data) {
    this.getDetailRoom();
    this.selectTicket = !data.statusSelectedSeat;
    this.selectSeat = data.statusSelectedSeat;
    this.resultTicket = !data.statusSelectedSeat;
    this.totalAmount = data.totalAmount;
    this.totalNumber = data.totalNumber;
    this.selectedTicket = data.selectedTicket;
    this.user = data.user;
  }

  backEvent(value) {
    this.selectTicket = !value;
    this.selectSeat = value;
    this.resultTicket = value;
  }

  nextEvent(value) {
    if (value) {
      this.selectTicket = !value;
      this.selectSeat = !value;
      this.resultTicket = value;
    }
  }

  ngOnDestroy() {
    $("#modalTrailer").modal('hide');
    $("#modalUser").modal('hide');
    $("#modalMessage").modal('hide');
    this.subDetailShowtime.unsubscribe();
    this.subDetailMovie.unsubscribe();
    this.subListCinema.unsubscribe();
  }
}
