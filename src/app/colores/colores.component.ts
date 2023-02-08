import { Component } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent {
  numAleatorio:Number=Math.floor(Math.random() * 10);
  miRojo:String="red";
  colorLocal:String="blue";

  generarAleatorio():String{
    return Math.floor(Math.random() * 255).toString(16);
  }
  colorAleatorio():String{
    this.colorLocal= "#" + this.generarAleatorio() + this.generarAleatorio() + this.generarAleatorio();
    return this.colorLocal;
  }
}
