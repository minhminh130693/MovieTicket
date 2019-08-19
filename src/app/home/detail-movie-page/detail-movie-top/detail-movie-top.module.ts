import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieTopComponent } from './detail-movie-top.component';
import { ShareModule } from 'src/app/_core/shared/module/share.module';
import { CircleRatingMovieComponent } from './circle-rating-movie/circle-rating-movie.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DetailMovieTopComponent, CircleRatingMovieComponent],
  exports: [DetailMovieTopComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule
  ]
})
export class DetailMovieTopModule { }
