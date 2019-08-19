import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/_core/services/data.service';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showtime-movie',
  templateUrl: './showtime-movie.component.html',
  styleUrls: ['./showtime-movie.component.scss'],
  providers: [DatePipe]
})
export class ShowtimeMovieComponent implements OnInit {

  @Input() detailMovie;
  @ViewChildren('showtimeCinema') showtimeCinema: QueryList<any>;
  @ViewChildren('showtimeDate') showtimeDate: QueryList<any>;

  listCinema: any = [];
  detailCinema: any = [];
  subListCinema: any = new Subscription();
  subDetailCinema: any = new Subscription();
  selectedCinema: string = '';
  selectedDate: string = '';
  checkShowtime: boolean = false;

  constructor(
    private datePipe: DatePipe,
    private dataService: DataService,
    private shareDataService: ShareDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getListCinema();
  }

  ngAfterViewInit() {
    this.showtimeCinema.changes.subscribe(item => window.setTimeout(() => {
      if (this.selectedCinema === '' && this.selectedCinema != null) {
        try {
          this.selectedCinema = this.listCinema[0].maHeThongRap;
          this.getDetailCinema();
          this.checkExistShowtime();
        }
        catch (error) { }
      }
    }, 0))

    this.showtimeDate.changes.subscribe(item => window.setTimeout(() => {
      if (this.selectedDate === '' && this.selectedDate != null) {
        try {
          this.selectedDate = this.datePipe.transform(this.detailMovie.lichChieu[0].ngayChieuGioChieu, 'dd-MM-yyyy');
          this.checkExistShowtime();
        }
        catch (error) { }
      }
    }, 0))
  }

  getListCinema() {
    const uri = 'api/QuanLyRap/LayThongTinHeThongRap';
    setTimeout(() => {
      this.subListCinema = this.dataService.get(uri).subscribe((data: any) => {
        this.listCinema = data;
      })
    }, 0)
  }

  getDetailCinema() {
    const uri = `api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.selectedCinema}`;
    setTimeout(() => {
      this.subDetailCinema = this.dataService.get(uri).subscribe((data: any) => {
        this.detailCinema = data;
      })
    }, 0)
  }

  selectCinema(value) {
    this.selectedCinema = value;
    this.getDetailCinema();
    this.checkExistShowtime();
  }

  selectDate(value) {
    this.selectedDate = this.datePipe.transform(value, 'dd-MM-yyyy');
    this.getDetailCinema();
    this.checkExistShowtime();
  }

  checkExistShowtime() {
    if (this.detailMovie.lichChieu.some((item) =>
      item.thongTinRap.maHeThongRap === this.selectedCinema
      && this.datePipe.transform(item.ngayChieuGioChieu, 'dd-MM-yyyy') === this.selectedDate)) {
      this.checkShowtime = true;
    }
    else { this.checkShowtime = false }
  }

  viewMap(addr) {
    this.shareDataService.sharingMapLink(addr);
  }

  detailRoom(maLichChieu, maPhim) {
    this.router.navigate(['/ticket-movie-page', maLichChieu], {queryParams: {maPhim: maPhim}});
  }

  ngOnDestroy() {
    this.subListCinema.unsubscribe();
    this.subDetailCinema.unsubscribe();
  }
}
