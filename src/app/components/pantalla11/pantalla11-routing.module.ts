import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla11Component } from './pantalla11.component';

 
const routes: Routes =[{
  path:'pantalla11',
  component: Pantalla11Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla11RoutingModule {}