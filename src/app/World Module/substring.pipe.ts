import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: any,): any {
    // console.log(value)
    return value.substring(0, 50);
  }

}
