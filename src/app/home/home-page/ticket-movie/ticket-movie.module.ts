import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketMovieComponent } from './ticket-movie.component';
import { MaterialModule } from 'src/app/_core/material/material.module';
import { SharePipesModule } from 'src/app/_core/shared/module/share-pipes.module';

@NgModule({
  declarations: [TicketMovieComponent],
  exports: [TicketMovieComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharePipesModule
  ]
})
export class TicketMovieModule { }
