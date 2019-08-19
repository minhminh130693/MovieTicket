import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-review-movie',
  templateUrl: './item-review-movie.component.html',
  styleUrls: ['./item-review-movie.component.scss']
})
export class ItemReviewMovieComponent implements OnInit {

  @Input() review;
  
  constructor() { }

  ngOnInit() {
  }

}
