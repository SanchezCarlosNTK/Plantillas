import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla13Component } from './pantalla13.component';

 
const routes: Routes =[{
  path:'pantalla13',
  component: Pantalla13Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla13RoutingModule {}