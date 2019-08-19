import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number;
  @Input() disabledClick: boolean;
  @Output() ratingClick = new EventEmitter();

  starCount: number = 5;
  ratingArray: any = [];

  constructor() { }

  ngOnInit() {
    for (let star = 1; star <= this.starCount; star++) {
      this.ratingArray.push(star);
    }
  }

  showIcon(star: number) {
    if (this.rating >= star) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(rating: number) {
    this.rating = rating;
    this.ratingClick.emit(this.rating);
  }
}
