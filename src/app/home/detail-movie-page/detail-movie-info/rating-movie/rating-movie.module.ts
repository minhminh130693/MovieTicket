import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingMovieComponent } from './rating-movie.component';
import { MaterialModule } from 'src/app/_core/material/material.module';
import { ShareModule } from 'src/app/_core/shared/module/share.module';
import { SharePipesModule } from 'src/app/_core/shared/module/share-pipes.module';
@NgModule({
  declarations: [RatingMovieComponent],
  exports: [RatingMovieComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ShareModule,
    SharePipesModule
  ]
})
export class RatingMovieModule { }
