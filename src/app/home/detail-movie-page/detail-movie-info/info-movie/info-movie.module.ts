import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoMovieComponent } from './info-movie.component';

@NgModule({
  declarations: [InfoMovieComponent],
  exports: [InfoMovieComponent],
  imports: [
    CommonModule
  ]
})
export class InfoMovieModule { }
