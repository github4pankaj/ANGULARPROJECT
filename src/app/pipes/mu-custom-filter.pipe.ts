import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'muCustomFilter'
})
export class MuCustomFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args===undefined){
      return value
    }else{
      return value.filter(function(v){
        return v.name.toLowerCase().includes(args.toLowerCase())
      })
    }

  }

}
