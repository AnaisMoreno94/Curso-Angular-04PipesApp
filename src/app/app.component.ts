import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

//La imoirtacion del PrimeNgConfig asi como agregarlo al constructor de la app y al ngOnInit es para activar la animacion de ripple al hacer click

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'pipesApp';

  constructor (private primeConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }
}
