import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroupByPipe } from 'src/app/_core/pipes/group-by.pipe';
import { SplitPipe } from 'src/app/_core/pipes/split.pipe';
import { trigger, animate, transition, style, keyframes } from '@angular/animations'
import * as _ from 'lodash';

@Component({
  selector: 'app-item-ticket',
  templateUrl: './item-ticket.component.html',
  styleUrls: ['./item-ticket.component.scss'],
  providers: [GroupByPipe, SplitPipe],
  animations: [
    trigger('animationAmount', [
      transition('* => *', [
        animate('1s ease-out', keyframes([
          style({ 'font-size': '16px' }),
          style({ 'font-size': '20px' }),
          style({ 'font-size': '16px' })
        ]))
      ])
    ])
  ]
})
export class ItemTicketComponent implements OnInit {

  @Input() detailShowtime;
  @Output() totalAmount = new EventEmitter();

  maxNumberTicket: number = 10;
  numberTicket: any = [];
  listTicket: any = [];
  amount: number = 0;
  totalTicket: number = 0;
  maxEmptyTicket: number = 0;

  constructor(
    private groupBy: GroupByPipe,
    private split: SplitPipe
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      if (this.detailShowtime != null) {
        try {
          this.listTicket = this.groupBy.transform(this.detailShowtime, ['loaiGhe', 'giaVe']);
          for (let i = 0; i < this.listTicket.length; i++) {
            this.numberTicket.push({ 
              index: i, 
              price: this.split.transform(this.listTicket[i].key, '|', 1), 
              number: 0, 
              amount: 0, 
              loaiGhe: this.split.transform(this.listTicket[i].key, '|', 0) });
          }
          this.maxEmptyTicket = _.countBy(this.detailShowtime, 'daDat').false;
        }
        catch (error) { }
      }
    }, 1000)
  }

  editNumberTicket(value, index) {

    if (value === 'minus' && this.numberTicket[index].number !== 0) {
      this.numberTicket[index].number--;
      this.numberTicket[index].amount = this.numberTicket[index].number * this.numberTicket[index].price;
    }
    else if (value === 'plus' && this.numberTicket[index].number !== this.maxNumberTicket && this.numberTicket[index].number !== this.maxEmptyTicket) {
      this.numberTicket[index].number++;
      this.numberTicket[index].amount = this.numberTicket[index].number * this.numberTicket[index].price;
    }
    this.totalAmount.emit(this.total(this.numberTicket));
  }

  total(arrayNumber) {
    let total = 0, number = 0, detail = [];
    arrayNumber.map(item => {
      total += item.amount;
      number += item.number;
      
      if(item.number !== 0){
        detail.push({loaiGhe: item.loaiGhe, number: item.number});
      }
    })
    this.totalTicket = number;
    return { number: number, total: total, detail: detail };
  }


}
