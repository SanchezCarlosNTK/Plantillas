import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla11',
  templateUrl: './pantalla11.component.html',
  styleUrls: ['./pantalla11.component.css']
})
export class Pantalla11Component implements OnInit {
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
