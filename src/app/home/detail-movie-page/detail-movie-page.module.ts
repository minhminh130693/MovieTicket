import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMoviePageComponent } from './detail-movie-page.component';
import { DetailMoviePageRoutingModule } from './detail-movie-page-routing.module';
import { DetailMovieTopModule } from './detail-movie-top/detail-movie-top.module';
import { DetailMovieInfoModule } from './detail-movie-info/detail-movie-info.module';
import { ShareModule } from 'src/app/_core/shared/module/share.module';

@NgModule({
  declarations: [DetailMoviePageComponent],
  imports: [
    CommonModule,
    DetailMoviePageRoutingModule,
    DetailMovieTopModule,
    DetailMovieInfoModule,
    ShareModule
  ]
})
export class DetailMoviePageModule { }
