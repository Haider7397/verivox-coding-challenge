import { Pipe, PipeTransform } from '@angular/core';
import { Tariff } from '../models';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(tariffs: Tariff[], attribute: keyof Tariff): Tariff[] {
    return tariffs.sort((a, b) => {
      const val1 = a[attribute] as number;
      const val2 = b[attribute] as number;
      if(attribute == "price") {
        return val1 - val2;
      } else{
        return val2 - val1 ;
      }
    });
  }

}
