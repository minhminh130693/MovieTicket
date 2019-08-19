import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SelectTicketComponent } from './select-ticket.component';
import { SharePipesModule } from 'src/app/_core/shared/module/share-pipes.module';
import { ItemTicketComponent } from './item-ticket/item-ticket.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/_core/shared/module/share.module';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi, 'vi');

@NgModule({
  declarations: [SelectTicketComponent, ItemTicketComponent],
  exports: [SelectTicketComponent],
  imports: [
    CommonModule,
    SharePipesModule,
    FormsModule,
    ShareModule
  ]
})
export class SelectTicketModule { 
}
