import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultTicketComponent } from './result-ticket.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ResultTicketComponent],
  exports: [ResultTicketComponent],
  imports: [
    CommonModule, 
    RouterModule
  ]
})
export class ResultTicketModule { }
