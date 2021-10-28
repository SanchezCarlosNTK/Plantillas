import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla8Component } from './pantalla8.component';

 
const routes: Routes =[{
  path:'pantalla8',
  component: Pantalla8Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla8RoutingModule {}