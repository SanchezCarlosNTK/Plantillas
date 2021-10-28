import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla10RoutingModule} from './pantalla10-routing.module';
import {Pantalla10Component} from './pantalla10.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [Pantalla10Component],
  imports: [
    CommonModule,
    Pantalla10RoutingModule,
    MatIconModule
  ],
  exports:[Pantalla10Component]
})
export class Pantalla10Module { }
