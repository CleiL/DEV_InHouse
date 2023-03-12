import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe'
})
export class EmailPipe implements PipeTransform {

  transform(value: string): string {
    console.log('-- value --');
    const resp = value.split('@');
    console.log(resp);
    return resp[0];
  }

}
