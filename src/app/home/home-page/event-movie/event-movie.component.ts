import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-movie',
  templateUrl: './event-movie.component.html',
  styleUrls: ['./event-movie.component.scss']
})
export class EventMovieComponent implements OnInit {

  showPromo: number = 8;
  showEvent: number = 8;
  listEventMovie: any = [
    { maEvent: 0, hinhAnh: "assets/img/event-1.jpg" },
    { maEvent: 1, hinhAnh: "assets/img/event-2.jpg" },
    { maEvent: 2, hinhAnh: "assets/img/event-3.jpg" },
    { maEvent: 3, hinhAnh: "assets/img/event-4.jpg" },
    { maEvent: 4, hinhAnh: "assets/img/event-5.jpg" },
    { maEvent: 5, hinhAnh: "assets/img/event-6.jpg" },
    { maEvent: 6, hinhAnh: "assets/img/event-7.jpg" },
    { maEvent: 7, hinhAnh: "assets/img/event-8.jpg" },
    { maEvent: 8, hinhAnh: "assets/img/event-9.jpg" },
    { maEvent: 9, hinhAnh: "assets/img/event-10.jpg" },
    { maEvent: 10, hinhAnh: "assets/img/event-11.jpg" }
  ];

  listPromoMovie: any = [
    { maPromo: 0, hinhAnh: "assets/img/promo-1.jpg" },
    { maPromo: 1, hinhAnh: "assets/img/promo-2.jpg" },
    { maPromo: 2, hinhAnh: "assets/img/promo-3.jpg" },
    { maPromo: 3, hinhAnh: "assets/img/promo-4.jpg" },
    { maPromo: 4, hinhAnh: "assets/img/promo-5.jpg" },
    { maPromo: 5, hinhAnh: "assets/img/promo-6.jpg" },
    { maPromo: 6, hinhAnh: "assets/img/promo-7.jpg" },
    { maPromo: 7, hinhAnh: "assets/img/promo-8.jpg" },
    { maPromo: 8, hinhAnh: "assets/img/promo-9.jpg" },
    { maPromo: 9, hinhAnh: "assets/img/promo-10.jpg" },
    { maPromo: 10, hinhAnh: "assets/img/promo-11.jpg" },
    { maPromo: 11, hinhAnh: "assets/img/promo-12.jpg" }
  ];

  constructor() { }

  ngOnInit() {
    this.getlistPromoMovie();
    this.getlistEventMovie();
  
  }

  getlistEventMovie() {
    return this.listEventMovie;
  }

  getlistPromoMovie() {
    return this.listPromoMovie;
  }

  viewMore(value) {
    if (value === 'promo') {
      this.showPromo += 8;
    }
    else if (value === 'event') {
      this.showEvent += 8;
    }
  }
}
