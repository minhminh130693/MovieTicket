import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewMovieComponent } from './review-movie.component';
import { ItemReviewMovieComponent } from './item-review-movie/item-review-movie.component';

@NgModule({
  declarations: [ReviewMovieComponent, ItemReviewMovieComponent],
  exports: [ReviewMovieComponent],
  imports: [
    CommonModule
  ]
})
export class ReviewMovieModule { }
