import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SelectSeatComponent } from './select-seat.component';
import { ItemSeatComponent } from './item-seat/item-seat.component';
import { CountdownModule } from 'ngx-countdown';
import localeVi from '@angular/common/locales/vi';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

registerLocaleData(localeVi, 'vi');

@NgModule({
  declarations: [SelectSeatComponent, ItemSeatComponent, ModalConfirmComponent],
  exports: [SelectSeatComponent],
  imports: [
    CommonModule,
    CountdownModule
  ]
})
export class SelectSeatModule { }
