import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla5Component } from './pantalla5.component';

 
const routes: Routes =[{
  path:'pantalla5',
  component: Pantalla5Component
}]
 
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class Pantalla5RoutingModule {}