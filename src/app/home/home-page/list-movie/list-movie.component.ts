import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  isShowing: boolean = true;
  @Input() listMovie: any;

  constructor() { }

  ngOnInit() {
  }

  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  }
}
