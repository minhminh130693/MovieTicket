import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderMovieComponent } from './slider-movie.component';
import { ItemSliderMovieComponent } from './item-slider-movie/item-slider-movie.component';
import { ShareModule } from 'src/app/_core/shared/module/share.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SliderMovieComponent, ItemSliderMovieComponent],
  exports: [SliderMovieComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule
  ]
})
export class SliderMovieModule { }
