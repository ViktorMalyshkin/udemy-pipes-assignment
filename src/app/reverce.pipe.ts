import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverce'
})
export class RevercePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.split('').reverse().join('');
  }

}
