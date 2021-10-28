import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla4Component } from './pantalla4.component';

 
const routes: Routes =[{
  path:'pantalla4',
  component: Pantalla4Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla4RoutingModule {}