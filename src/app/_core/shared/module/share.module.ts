import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ModalTrailerComponent } from 'src/app/components/modal-trailer/modal-trailer.component';
import { ScrollToTopComponent } from 'src/app/components/scroll-to-top/scroll-to-top.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from 'src/app/components/star-rating/star-rating.component';
import { MaterialModule } from '../../material/material.module';
import { ModalMapComponent } from 'src/app/components/modal-map/modal-map.component';
import { FormsModule } from '@angular/forms';
import { ModalUserComponent } from 'src/app/components/modal-user/modal-user.component';
import { ModalMessageComponent } from 'src/app/components/modal-message/modal-message.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    ModalTrailerComponent, 
    ScrollToTopComponent, 
    StarRatingComponent,
    ModalMapComponent,
    ModalUserComponent,
    ModalMessageComponent
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    ModalTrailerComponent, 
    ScrollToTopComponent, 
    StarRatingComponent,
    ModalMapComponent,
    ModalUserComponent,
    ModalMessageComponent
  ],
  imports: [
    CommonModule,
    StickyNavModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ]
})
export class ShareModule { }
