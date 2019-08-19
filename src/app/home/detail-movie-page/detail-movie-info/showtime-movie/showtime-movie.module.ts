import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtimeMovieComponent } from './showtime-movie.component';
import { SharePipesModule } from 'src/app/_core/shared/module/share-pipes.module';
import { ShareModule } from 'src/app/_core/shared/module/share.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShowtimeMovieComponent],
  exports: [ShowtimeMovieComponent],
  imports: [
    CommonModule,
    SharePipesModule,
    ShareModule,
    RouterModule
  ]
})
export class ShowtimeMovieModule { }
