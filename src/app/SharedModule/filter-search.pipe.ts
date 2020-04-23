import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {
  transform(value: any, searchIte: any): any {
    // console.log(value)
    if (searchIte === undefined) {
      if(value.length < 40){
          var dta =value.shift();
          // console.log(dta)
      }
      return value;
     
    }
    console.log(value.length)
    if (value.length < 40) {
      return value.filter((search) => {
        return search.state.toLowerCase().indexOf(searchIte.toLowerCase()) > -1;
      })
    }
    else{
      return value.filter((search)=>{
        return search.Country.toLowerCase().indexOf(searchIte.toLowerCase()) > -1;
    })
    }


  }
}
