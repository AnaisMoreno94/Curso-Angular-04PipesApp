import { Component, OnInit, Output} from '@angular/core';
import { Car, Color } from '../../interfaces/cars.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent implements OnInit {

  nombre:string =  'Anais';

  argumento:boolean= true;

  order:string = '';

  cars:Car[] = [
    {
  model: 'MCL34',
      year: 2019,
      brand:'McLaren',
      color: Color.orange
    },
    {
      model :'W13',
      year:2022,
      brand:'Mercedes',
      color:Color.silver
    },
    {
      model:'RB12',
      year:2021,
      brand:'Red-Bull',
      color:Color.blue
    },{
      model:'A521',
      year:2020,
      brand:'Alphine',
      color:Color.black
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.cars)
  }

  cambiarArgumento(){
    // if(this.argumento === true) {
    //   this.argumento = false
    // } else this.argumento= true
    //todo esto lo pudiste resumir con esto.
    this.argumento =!this.argumento;
  }

  changeOrder(value:string) {
    this.order = value;
    console.log(value)
    console.log(this.cars)
  }

}




