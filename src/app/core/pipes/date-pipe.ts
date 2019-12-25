import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortdate' })
export class ShortDatePipe implements PipeTransform {
  transform(val: string): string {
    return val.split('T')[0];
  }
}
