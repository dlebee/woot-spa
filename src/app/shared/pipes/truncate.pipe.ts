import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if (!value || args.length == 0)
      return value;

    const maxLength = args[0];

    if (value.length > maxLength)
      return value.substr(0, maxLength-4)+' ...';

    return value;
  }

}
