import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique',
  pure: false
})
export class UniquePipe implements PipeTransform {
  transform(input: any[], args?: string | undefined): any[];
  transform<T>(input: T, args?: string | undefined): T;

  transform(value: any[], propertyName?: string | undefined): any {
    const uniques: boolean[] = [];

    return Array.isArray(value)
      ? this.isUndefined(propertyName)
        ? value.filter((e, i) => value.indexOf(e) === i)
        : value.filter((e, i) => {
          let value = this.extractDeepPropertyByMapKey(e, propertyName);
          value = this.isObject(value) ? JSON.stringify(value) : value;
          value = this.isDate(value) ? value.slice(0, 10) : value;

          if (this.isUndefined(value) || uniques[value]) {
            return false;
          }
          uniques[value] = true;
          return true;
        })
      : value;
  };

  isUndefined(value: any) {
    return typeof value === 'undefined';
  }

  isObject(value: any) {
    return value !== null && typeof value === 'object';
  }

  isDate(value: any) {
    if (value.toString() === parseInt(value).toString()) return false;
    const tryDate = new Date(value);
    return (tryDate && tryDate.toString() != "NaN" && tryDate.toString() != "Invalid Date");
  }

  extractDeepPropertyByMapKey(obj: any, map: string): any {
    const keys = map.split('.');
    const head = keys.shift();

    return keys.reduce((prop: any, key: string) => {
      return !this.isUndefined(prop) && !this.isUndefined(prop[key]) ? prop[key] : undefined;
    }, obj[head || '']);
  }

}