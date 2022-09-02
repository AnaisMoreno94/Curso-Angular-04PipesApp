import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations'



//Modulos Propios
import { AppRouterModule } from './app-router.module';

import { SharedModule } from './shared/shared.module';

import { PipesModule } from './pipes/pipes.module'


//Modulos para cambiar formato local de los pipes(?)

import  localES  from '@angular/common/locales/es'
import localFR from '@angular/common/locales/fr'
import localEN from '@angular/common/locales/en'
import { registerLocaleData } from '@angular/common';

//funcion para cambiar el registro de la data local // Recordar agregarlo a los providers
registerLocaleData(localES);
registerLocaleData(localFR);
registerLocaleData(localEN);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    PipesModule
  ],
  providers: [{provide:LOCALE_ID, useValue:'fr'},{provide:LOCALE_ID, useValue:'es'},{provide:LOCALE_ID, useValue:'en'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
