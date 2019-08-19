import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {
  transform(input: any, discriminator: any = [], delimiter: string = '|'): any {

    if (!Array.isArray(input)) {
      return input;
    }
    const arrayGroup = this.groupBy(input, discriminator, delimiter);
    return Object.keys(arrayGroup).map(key => {
      return { key: key, value: arrayGroup[key] };
    });
  }

  groupBy(list: any[], discriminator: any, delimiter: string) {
    return list.reduce((acc: any, payload: string) => {
      const key = this.extractKeyByDiscriminator(discriminator, payload, delimiter);
      acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];
      return acc;
    }, {});
  }

  extractKeyByDiscriminator(discriminator: any, payload: string, delimiter: string) {
    if (this.isFunction(discriminator)) {
      return (<Function>discriminator)(payload);
    }

    if (Array.isArray(discriminator)) {
      return discriminator.map(k => this.extractDeepPropertyByMapKey(payload, k)).join(delimiter);
    }

    return this.extractDeepPropertyByMapKey(payload, <string>discriminator);
  }

  extractDeepPropertyByMapKey(obj: any, map: string): any {
    const keys = map.split('.');
    const head = keys.shift();

    return keys.reduce((prop: any, key: string) => {
      return !this.isUndefined(prop) && !this.isUndefined(prop[key]) ? prop[key] : undefined;
    }, obj[head || '']);
  }

  isFunction(value: any) {
    return typeof value === 'function';
  }

  isUndefined(value: any) {
    return typeof value === 'undefined';
  }

  isDate(value: any) {
    if (value.toString() === parseInt(value).toString()) return false;
    const tryDate = new Date(value);
    return (tryDate && tryDate.toString() != "NaN" && tryDate.toString() != "Invalid Date");
  }
}
