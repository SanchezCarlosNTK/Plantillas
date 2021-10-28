import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Route, RouterModule, Routes} from '@angular/router';
import { AppComponent } from './components/app.component';
import { Pantalla1Module } from './components/pantalla1/pantalla1.module';
import { Pantalla2Module } from './components/pantalla2/pantalla2.module';
import { Pantalla3Module } from './components/pantalla3/pantalla3.module';
import { Pantalla4Module } from './components/pantalla4/pantalla4.module';
import { Pantalla5Module } from './components/pantalla5/pantalla5.module';
import { Pantalla6Module } from './components/pantalla6/pantalla6.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Pantalla7Module } from './components/pantalla7/pantalla7.module';
import { Pantalla8Module } from './components/pantalla8/pantalla3.module';
import { Pantalla9Module } from './components/pantalla9/pantalla9.module';
import { Pantalla10Module } from './components/pantalla10/pantalla10.module';
import { Pantalla11Module } from './components/pantalla11/pantalla11.module';
import { Pantalla12Module } from './components/pantalla12/pantalla12.module';
import { Pantalla13Module } from './components/pantalla13/pantalla13.module';
import { Pantalla14Module } from './components/pantalla14/pantalla14.module';
import { CommonModule } from '@angular/common';




const routes: Routes =[{
  path:'',
  component: AppComponent
}]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Pantalla1Module,
    Pantalla2Module,
    Pantalla3Module,
    Pantalla4Module,
    Pantalla5Module,
    Pantalla6Module,
    Pantalla7Module,
    Pantalla8Module,
    Pantalla9Module,
    Pantalla10Module,
    Pantalla11Module,
    Pantalla12Module,
    Pantalla13Module,
    Pantalla14Module,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
