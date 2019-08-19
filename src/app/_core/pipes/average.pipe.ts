import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {
  transform(items: any, attr: string): any {
    let sum = items.reduce((a, b) => a + b[attr], 0);
    return sum / items.length;
  }
}
