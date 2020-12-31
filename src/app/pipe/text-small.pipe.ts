import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSmall'
})
export class TextSmallPipe implements PipeTransform {

  transform(value: string): string {  
    return '<h5 class="ml-2">' + value + '</h5>' ;  
  } 

}
