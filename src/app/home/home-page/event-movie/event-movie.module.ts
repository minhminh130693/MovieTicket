import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventMovieComponent } from './event-movie.component';
import { ItemEventMovieComponent } from './item-event-movie/item-event-movie.component';

@NgModule({
  declarations: [EventMovieComponent, ItemEventMovieComponent],
  exports: [EventMovieComponent],
  imports: [
    CommonModule
  ]
})
export class EventMovieModule { }
