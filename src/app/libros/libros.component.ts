import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
 
  export class LibrosComponent implements OnInit {
    
    verAutor:any;
    libros: Array<object>
  
  constructor (){
    //this.libros = ["Harry potter", "Los 7 habitos", "La celestina"]
    this.libros = [
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
      ];
    }
    showAuthor(_libro:any){
      this.verAutor="Esta escrito por: " + _libro.autor;
      alert(this.verAutor);
    }

    ngOnInit(): void {
        }
}
