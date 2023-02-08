import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebas 3.1';
  condicion:Boolean=true;
  dias_semana:String|undefined;
  color:String|undefined;
  vblecolor:String|undefined;
  libros: Array <any>;
  verAutor:any;

  constructor (){
    //this.libros = ["Harry potter", "Los 7 habitos", "La celestina"]
    this.libros = [
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
      ]
    }
    showAuthor(_libro:any){
      this.verAutor="Esta escrito por: " + _libro.autor;
      alert(this.verAutor);
    }
}
