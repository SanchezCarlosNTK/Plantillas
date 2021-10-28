import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla13RoutingModule} from './pantalla13-routing.module';
import {Pantalla13Component} from './pantalla13.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [Pantalla13Component],
  imports: [
    CommonModule,
    Pantalla13RoutingModule,
    MatIconModule
  ],
  exports:[Pantalla13Component]
})
export class Pantalla13Module { }
