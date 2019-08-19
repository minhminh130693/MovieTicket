import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-movie',
  templateUrl: './slider-movie.component.html',
  styleUrls: ['./slider-movie.component.scss']
})
export class SliderMovieComponent implements OnInit {

  listSliderMovie: any = [
    { maSlider: 0, maPhim: '1540', hinhAnh: "assets/img/banner-1.jpg", trailer: "https://www.youtube.com/embed/DKqu9qc-5f4" },
    { maSlider: 1, maPhim: '1510', hinhAnh: "assets/img/banner-2.jpg", trailer: "https://www.youtube.com/embed/LTDaET-JweU" },
    { maSlider: 2, maPhim: '1390', hinhAnh: "assets/img/banner-3.jpg", trailer: "https://www.youtube.com/embed/1HpZevFifuo" },
    { maSlider: 3, maPhim: '1375', hinhAnh: "assets/img/banner-4.jpg", trailer: "https://www.youtube.com/embed/0WWzgGyAH6Y" },
    { maSlider: 4, maPhim: '1345', hinhAnh: "assets/img/banner-5.jpg", trailer: "https://www.youtube.com/embed/seMwpP0yeu4" },
    { maSlider: 5, maPhim: '1315', hinhAnh: "assets/img/banner-6.jpg", trailer: "https://www.youtube.com/embed/S3AVcCggRnU" }
  ];

  constructor() { }

  ngOnInit() {
    this.getlistSliderMovie();
  }

  getlistSliderMovie() {
    return this.listSliderMovie;
  }
}
