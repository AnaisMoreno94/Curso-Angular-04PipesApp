import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'colores'
})
export class ColoresPipe implements PipeTransform{

    colors:string[] = ['Black','Blue','Orange','Silver','White']
    
    transform(index:number):string {
      return this.colors[index]
    }
} 