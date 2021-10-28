import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla3Component } from './pantalla3.component';

 
const routes: Routes =[{
  path:'pantalla3',
  component: Pantalla3Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla3RoutingModule {}