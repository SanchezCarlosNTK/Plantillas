import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla10Component } from './pantalla10.component';

 
const routes: Routes =[{
  path:'pantalla10',
  component: Pantalla10Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla10RoutingModule {}