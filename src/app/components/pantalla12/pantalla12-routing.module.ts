import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla12Component } from './pantalla12.component';

 
const routes: Routes =[{
  path:'pantalla12',
  component: Pantalla12Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla12RoutingModule {}