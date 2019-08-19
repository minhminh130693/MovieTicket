import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { AveragePipe } from '../../pipes/average.pipe';
import { GroupByPipe } from '../../pipes/group-by.pipe';
import { SplitPipe } from '../../pipes/split.pipe';
import { UniquePipe } from '../../pipes/unique.pipe';

@NgModule({
  declarations: [OrderByPipe, TimeAgoPipe, AveragePipe, GroupByPipe, SplitPipe, UniquePipe],
  exports: [OrderByPipe, TimeAgoPipe, AveragePipe, GroupByPipe, SplitPipe, UniquePipe],
  imports: [
    CommonModule
  ]
})
export class SharePipesModule { }
