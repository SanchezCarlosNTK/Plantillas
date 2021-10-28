import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla7Component } from './pantalla7.component';

 
const routes: Routes =[{
  path:'pantalla7',
  component: Pantalla7Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla7RoutingModule {}