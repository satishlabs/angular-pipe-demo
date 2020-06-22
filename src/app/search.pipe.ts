import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysearch'
})
export class SearchPipe implements PipeTransform {

  transform(itmes: any, searchValue: any): any {
    if(!searchValue){        
      return itmes;    
    } else{
     searchValue=searchValue.toLowerCase();
      return itmes.filter(itm => {          
        return (itm.course.toLowerCase().includes(searchValue)|| itm.sname.toLowerCase().includes(searchValue));       
       });   
    }

  }

}
