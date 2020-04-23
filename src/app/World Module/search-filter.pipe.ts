import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchIte:any): any {
    if(searchIte === undefined){
      return value;
    }
   
    return value.filter((search)=>{
        return search.Country.toLowerCase().indexOf(searchIte.toLowerCase()) > -1;
    })
  }

}
