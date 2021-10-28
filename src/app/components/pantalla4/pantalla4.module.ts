import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla4RoutingModule} from './pantalla4-routing.module';
import {Pantalla4Component} from './pantalla4.component';


@NgModule({
  declarations: [Pantalla4Component],
  imports: [
    CommonModule,
    Pantalla4RoutingModule
  ],
  exports:[Pantalla4Component]
})
export class Pantalla4Module { }
