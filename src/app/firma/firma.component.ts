import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css']
})
export class FirmaComponent {
  @Input() colorNombre:String="hola";
}
