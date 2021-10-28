import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla13',
  templateUrl: './pantalla13.component.html',
  styleUrls: ['./pantalla13.component.css']
})
export class Pantalla13Component implements OnInit {

  status:boolean=false;
  clase:string=''
  constructor() { }

  ngOnInit(): void {
  }
  cambiarEstado(){
    this.clase=(this.status) ? 'cerrar':'abrir';
    this.status=!this.status;
  }
}
