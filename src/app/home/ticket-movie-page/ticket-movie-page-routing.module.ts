import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketMoviePageComponent } from './ticket-movie-page.component';
import { SelectTicketComponent } from './select-ticket/select-ticket.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { ResultTicketComponent } from './result-ticket/result-ticket.component';

const routes: Routes = [
  { path: "", component: TicketMoviePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketMoviePageRoutingModule { }