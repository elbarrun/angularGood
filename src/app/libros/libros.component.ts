import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { LibroclickedService } from '../libroclicked.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: any;
  errorHttp: any;
  cargando: any;
  constructor(private http: HttpClient, public Libroclicked: LibroclickedService) {

  }


  ngOnInit(): void {
    this.cargarLista();
    this.cargando = false;
  }

  cargarLista() {
    this.http.get('./assets/lista-libros.json').subscribe(
      data => { this.libros = data; this.cargando = false },
      data => { this.errorHttp = true; }
    );

  }

  //Funcion que hay que usar para ver que funciona correctamente la visualizacion de errores
  /*
  cargarLista() {
    this.http.get('./assets/lista-libro.json').subscribe(
      data => { this.libros = data; this.cargando = false },
      data => { this.errorHttp = true; }
    );

  }
  */
  agregarLibro(_libroVisto: any) {
    this.Libroclicked.libroVisto(_libroVisto);
  }

}

