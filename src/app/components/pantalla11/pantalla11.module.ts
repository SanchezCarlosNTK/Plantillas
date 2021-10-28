import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla11RoutingModule} from './pantalla11-routing.module';
import {Pantalla11Component} from './pantalla11.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [Pantalla11Component],
  imports: [
    CommonModule,
    Pantalla11RoutingModule,
    MatIconModule
  ],
  exports:[Pantalla11Component]
})
export class Pantalla11Module { }
