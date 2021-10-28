import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla9RoutingModule} from './pantalla9-routing.module';
import {Pantalla9Component} from './pantalla9.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [Pantalla9Component],
  imports: [
    CommonModule,
    Pantalla9RoutingModule,
    MatIconModule
  ],
  exports:[Pantalla9Component]
})
export class Pantalla9Module { }
