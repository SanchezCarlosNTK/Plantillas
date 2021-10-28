import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla8RoutingModule} from './pantalla8-routing.module';
import {Pantalla8Component} from './pantalla8.component';


@NgModule({
  declarations: [Pantalla8Component],
  imports: [
    CommonModule,
    Pantalla8RoutingModule
  ],
  exports:[Pantalla8Component]
})
export class Pantalla8Module { }
