import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(value: string, enMayusculas:boolean = true, texto:string= ''):string {
        // if( enMayusculas === false ){
        //     return value.toLowerCase()
        // } else return value.toUpperCase()

        if (texto.length>0){
            return (enMayusculas) ? texto.toUpperCase() : texto.toLowerCase();
        } else return (enMayusculas) ? value.toUpperCase() : value.toLowerCase();
    }
}