import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-rating-movie',
  templateUrl: './circle-rating-movie.component.html',
  styleUrls: ['./circle-rating-movie.component.scss']
})
export class CircleRatingMovieComponent implements OnInit {

  @Input() avgRating: number;
  @Input() avgRatingPer: number;

  constructor() {
  }

  ngOnInit() {
  }

}
