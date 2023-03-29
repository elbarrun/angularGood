import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroclickedService {

  libros: any;

  constructor(private http: HttpClient) {
    this.libros = [];
  }

  libroVisto(libroVisto: any) {
    this.libros.push(libroVisto);
  }

  verListado() {
    if (this.libros.length > 0) {
      return this.libros;
    } else {
      return false;
    }
  }
}
