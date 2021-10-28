import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla12RoutingModule} from './pantalla12-routing.module';
import {Pantalla12Component} from './pantalla12.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [Pantalla12Component],
  imports: [
    CommonModule,
    Pantalla12RoutingModule,
    MatIconModule
  ],
  exports:[Pantalla12Component]
})
export class Pantalla12Module { }
