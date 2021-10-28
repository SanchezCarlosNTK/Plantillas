import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla2Component } from './pantalla2.component';

 
const routes: Routes =[{
  path:'pantalla2',
  component: Pantalla2Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla2RoutingModule {}