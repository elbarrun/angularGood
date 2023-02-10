import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';
import {HttpClient, HttpResponse} from '@angular/common/http'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libros: any;
    
  constructor (private http: HttpClient, public Libroclicked:LibroclickedService){

    }
  
  ngOnInit(): void{
    this.cargarLista();
  }
  
  cargarLista(){
    this.http.get('./assets/lista-libros.json').subscribe(
      data => {this.libros = data;}
    );
  }
agregarLibro(_libroVisto:any){
  this.Libroclicked.libroVisto(_libroVisto);
}
}
