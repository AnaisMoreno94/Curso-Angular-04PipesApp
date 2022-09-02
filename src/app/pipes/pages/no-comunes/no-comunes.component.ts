import { Component } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})


export class NoComunesComponent   {

  //Para que los fielsed esten cerrados por defecto

  collapsed:boolean =true;


 //i18nSelect - El ejemplo el lo hizo con variables comunes pero funciona igual de bien con objetos


   mapInv = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'nb': 'invitarle'
  }

  personas:Persona[]= [
    {
      name: 'Anais',
  gender:'femenino'
    },
    {
    name:'Alex',
    gender: 'masculino'
   },
   {
    name: 'Ramy',
    gender: 'nb'
   }
  ];

  //i18nPlural
  clientesN:string[] =[];
  clientesU:string[] = ['Anais'];
  clientesV:string[] =['Anais', 'Alex', 'Raul', 'Ramy','Alexa', 'Maria', 'Javier'];

  mapCli= {
  '=0': 'no tenemos ningun cliente',
  '=1':'tenemos # cliente ',
  '=2': 'tenemos 2 clientes',
  'other': 'tenemos # clientes'
  }


  index:number=0;

    cambiarPersona(){
    if(this.index < this.personas.length -1 ){
      this.index += 1;
    } else if (this.index = this.personas.length -1){
      this.index=0
    }
  }


  clientes:string[] = ['','','','']
  disabled:boolean = false;

  borrarPersona(){
    if( this.clientes.length >1  ){
      this.clientes.pop()
    } else if (this. clientes.length <=1 && this.clientes.length > 0){
      this.clientes.pop()
      this.disabled= true;
    }
    }
  

  agregarPersona(){
     this.clientes.push('')
     this.disabled=false;
  }


  //slice pipe
  
  anais = {
    nombre:'Anais',
    apellido:'Moreno',
    estadoCivil:'Soltero',
    peso:'76kg'
    }

  // async Pipe

  myObservable = interval(3000);

  valorPromesa = new Promise((resolve, reject)=>{

    setTimeout(()=>{
      resolve('Hay data de promesa')
    }, 3000)
  })


}

interface Persona {
  name:string,
  gender:string
}
