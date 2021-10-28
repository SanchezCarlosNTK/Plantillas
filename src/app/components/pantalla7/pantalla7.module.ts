import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla7RoutingModule} from './pantalla7-routing.module';
import {Pantalla7Component} from './pantalla7.component';



@NgModule({
  declarations: [Pantalla7Component],
  imports: [
    CommonModule,
    Pantalla7RoutingModule
  ],
  exports:[Pantalla7Component]
})
export class Pantalla7Module { }
