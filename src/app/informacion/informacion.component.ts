import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  libros:Array<object>;
  libroId:any;
  libroClick:any;

  
  constructor (private rutausuario:ActivatedRoute){
    this.libros = [
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
      ];
    }

    ngOnInit(): void {
        this.rutausuario.params.subscribe(params =>{ //Params aquí, es un observable, un método asíncrono, que tiene subscribe
        this.libroId= params['libroId'] //Params aquí es un array asociativo, me situo en el libroId que figure en la url
        this.libroClick = this.libroBuscador();
        })
    }

    filtroId(libro:any){
      return libro.id == this;
    }

    libroBuscador(){
      return this.libros.filter (this.filtroId, this.libroId) [0];
      //filter crea un nuevo array de libros, con los que cumplen la condicion
      //Se coge el elemento [0] para quedarnos con el primero de la lista
      //Que será el primero que lo cumpla
    }
}

