import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla5RoutingModule} from './pantalla5-routing.module';
import {Pantalla5Component} from './pantalla5.component';


@NgModule({
  declarations: [Pantalla5Component],
  imports: [
    CommonModule,
    Pantalla5RoutingModule
  ],
  exports:[Pantalla5Component]
})
export class Pantalla5Module { }
