import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { SliderMovieModule } from './slider-movie/slider-movie.module';
import { ListMovieModule } from './list-movie/list-movie.module';
import { ReviewMovieModule } from './review-movie/review-movie.module';
import { EventMovieModule } from './event-movie/event-movie.module';
import { TicketMovieModule } from './ticket-movie/ticket-movie.module';
import { ShareModule } from 'src/app/_core/shared/module/share.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SliderMovieModule,
    ListMovieModule,
    ReviewMovieModule,
    EventMovieModule,
    TicketMovieModule,
    ShareModule
  ]
})
export class HomePageModule { }
