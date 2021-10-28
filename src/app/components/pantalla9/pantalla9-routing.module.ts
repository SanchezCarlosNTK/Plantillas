import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla9Component } from './pantalla9.component';

 
const routes: Routes =[{
  path:'pantalla9',
  component: Pantalla9Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla9RoutingModule {}