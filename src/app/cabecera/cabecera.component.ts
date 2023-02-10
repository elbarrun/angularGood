import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  constructor (public librosVistos:LibroclickedService){}

  ngOnInit(): void{}
}
