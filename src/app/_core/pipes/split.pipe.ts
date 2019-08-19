import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: string, delimiter: string, index: number): any {
    return value.split(delimiter)[index];
  }
}
