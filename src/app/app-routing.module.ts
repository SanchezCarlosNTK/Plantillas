import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
const routes: Routes = [{
  path:'',
  redirectTo:'login',
  pathMatch: 'full'
},{
  path:'pantalla1',
  loadChildren:() => import('./components/pantalla1/pantalla1.module').then(_ => _.Pantalla1Module)
},
{
  path:'pantalla2',
  loadChildren:() => import('./components/pantalla2/pantalla2.module').then(_ => _.Pantalla2Module)
},
{
  path:'pantalla3',
  loadChildren:() => import('./components/pantalla3/pantalla3.module').then(_ => _.Pantalla3Module)
},
{
  path:'pantalla4',
  loadChildren:() => import('./components/pantalla4/pantalla4.module').then(_ => _.Pantalla4Module)
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }