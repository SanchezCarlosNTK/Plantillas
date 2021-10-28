import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'plantillas';
  contador:number=200;

clase='clase1';

estilos:object={
  overflow:'scroll' ,
  position:'relative',
  rigth:'0px'
}

}

