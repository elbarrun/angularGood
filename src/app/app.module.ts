import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompruebaComponent } from './comprueba/comprueba.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';

@NgModule({
  declarations: [
    AppComponent,
    CompruebaComponent,
    Prueba2Component,
    ColoresComponent,
    FirmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
