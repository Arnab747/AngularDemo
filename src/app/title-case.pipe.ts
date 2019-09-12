import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  private pre = ['of', 'on', 'the', 'in', 'ad', 'sit'];
  transform(value: any, ...args: any[]): any {
    return value.split(' ').map((x) => !this.pre.includes(x) ? x.substring(0, 1).toUpperCase() + x.substring(1) : x).join(' ');
  }

}
