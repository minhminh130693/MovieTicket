import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketMoviePageComponent } from './ticket-movie-page.component';
import { TicketMoviePageRoutingModule } from './ticket-movie-page-routing.module';
import { SelectTicketModule } from './select-ticket/select-ticket.module';
import { SelectSeatModule } from './select-seat/select-seat.module';
import { ResultTicketModule } from './result-ticket/result-ticket.module';
import { ShareModule } from 'src/app/_core/shared/module/share.module';

@NgModule({
  declarations: [TicketMoviePageComponent],
  imports: [
    CommonModule,
    TicketMoviePageRoutingModule,
    SelectTicketModule,
    SelectSeatModule,
    ResultTicketModule,
    ShareModule
  ]
})
export class TicketMoviePageModule { }
