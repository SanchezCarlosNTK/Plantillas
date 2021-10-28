import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla6RoutingModule} from './pantalla6-routing.module';
import {Pantalla6Component} from './pantalla6.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [Pantalla6Component],
  imports: [
    CommonModule,
    Pantalla6RoutingModule,
    MatIconModule
  ],
  exports:[Pantalla6Component]
})
export class Pantalla6Module { }
