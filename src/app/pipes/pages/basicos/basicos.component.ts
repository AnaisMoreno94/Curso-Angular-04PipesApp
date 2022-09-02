import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

 lowercase:string = 'Anais Moreno'
 uppercase:string = 'anais moreno'
 camelcase:string= 'anaiS MOrenO'

  constructor() { }

  fecha:Date = new Date()


}
