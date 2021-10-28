import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla3RoutingModule} from './pantalla3-routing.module';
import {Pantalla3Component} from './pantalla3.component';


@NgModule({
  declarations: [Pantalla3Component],
  imports: [
    CommonModule,
    Pantalla3RoutingModule
  ],
  exports:[Pantalla3Component]
})
export class Pantalla3Module { }
