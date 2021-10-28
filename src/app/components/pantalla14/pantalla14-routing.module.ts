import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla14Component } from './pantalla14.component';

 
const routes: Routes =[{
  path:'pantalla14',
  component: Pantalla14Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla14RoutingModule {}