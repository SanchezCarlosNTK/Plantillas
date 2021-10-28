import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla6Component } from './pantalla6.component';

 
const routes: Routes =[{
  path:'pantalla6',
  component: Pantalla6Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla6RoutingModule {}