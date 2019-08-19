import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
declare var $: any;

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {

  messageContent: string = 'aaa';

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.shareMessageContent.subscribe((data: any) => {
      if (data != null && data != '') {
        this.messageContent = data;
      }
    })
  }

  closeMessage() {
    $("#modalMessage").on('hidden.bs.modal', () => {
      this.messageContent = '';
    });
  }

}
