import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovieComponent } from './list-movie.component';
import { ShareModule } from 'src/app/_core/shared/module/share.module';
import { ItemMovieComponent } from './item-movie/item-movie.component';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListMovieComponent, ItemMovieComponent],
  exports: [ListMovieComponent],
  imports: [
    CommonModule,
    ShareModule,
    OwlModule,
    RouterModule
  ]
})
export class ListMovieModule { }
