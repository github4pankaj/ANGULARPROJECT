import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==='asc'){
     return value.sort(function(a,b){return a-b});
    }else{
      return value.sort(function(a,b){return a-b}).reverse();
    }
  }

}
