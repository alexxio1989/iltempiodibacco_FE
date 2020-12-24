import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: string): string {  
    return value.length > 22 ?  '<h5 class="ml-2">' + value + '</h5>' : '<h4>' + value + '</h4>';  
  } 

}
