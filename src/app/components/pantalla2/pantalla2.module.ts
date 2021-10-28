import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla2RoutingModule} from './pantalla2-routing.module';
import {Pantalla2Component} from './pantalla2.component';


@NgModule({
  declarations: [Pantalla2Component],
  imports: [
    CommonModule,
    Pantalla2RoutingModule
  ],
  exports:[Pantalla2Component]
})
export class Pantalla2Module { }
