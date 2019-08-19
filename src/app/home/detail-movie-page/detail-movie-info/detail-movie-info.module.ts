import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieInfoComponent } from './detail-movie-info.component';
import { ShareModule } from 'src/app/_core/shared/module/share.module';
import { InfoMovieModule } from './info-movie/info-movie.module';
import { RatingMovieModule } from './rating-movie/rating-movie.module';
import { ShowtimeMovieModule } from './showtime-movie/showtime-movie.module';

@NgModule({
  declarations: [DetailMovieInfoComponent],
  exports: [DetailMovieInfoComponent],
  imports: [
    CommonModule,
    ShareModule,
    InfoMovieModule,
    RatingMovieModule,
    ShowtimeMovieModule
  ]
})
export class DetailMovieInfoModule { }
