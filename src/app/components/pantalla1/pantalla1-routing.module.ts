import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla1Component } from './pantalla1.component';

 
const routes: Routes =[{
  path:'pantalla1',
  component: Pantalla1Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla1RoutingModule {}