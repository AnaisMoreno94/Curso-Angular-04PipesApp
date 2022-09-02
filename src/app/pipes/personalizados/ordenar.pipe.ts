import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/cars.interfaces';
@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {
  transform(cars: Car[], order: string = ''): Car[] {
    
    switch(order){

      case 'model': return cars.sort( (a,b)=> (a.model > b.model) ? 1 : -1);

      case 'year': return cars.sort ((a,b)=> (a.year > b.year) ? 1 : -1);

      case 'brand': return cars.sort((a,b)=> (a.brand> b.brand) ? 1 : -1);

      case 'color': return cars.sort((a,b)=>(a.color> b.color) ? 1 : -1);

      default: return cars;
    }
  }

}
