import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pantalla14RoutingModule} from './pantalla14-routing.module';
import {Pantalla14Component} from './pantalla14.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [Pantalla14Component],
  imports: [
    CommonModule,
    Pantalla14RoutingModule,
    MatIconModule
  ],
  exports:[Pantalla14Component]
})
export class Pantalla14Module { }
