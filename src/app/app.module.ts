import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompruebaComponent } from './comprueba/comprueba.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';
import { LibrosComponent } from './libros/libros.component';
import { FormsModule } from '@angular/forms';
import { ServiciosComponent } from './servicios/servicios.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const rutas:Routes = [
  {path:'listado-libros', component: LibrosComponent},
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'**', redirectTo: '/'}
]
  
@NgModule({
  declarations: [
    AppComponent,
    CompruebaComponent,
    Prueba2Component,
    ColoresComponent,
    FirmaComponent,
    LibrosComponent,
    ServiciosComponent,
    CabeceraComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutas)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
