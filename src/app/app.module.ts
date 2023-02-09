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
import { InformacionComponent } from './informacion/informacion.component';
import { LibroclickedService } from './libroclicked.service';

const routes:Routes = [
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'listado-libros', component: LibrosComponent},
  {path:'informacion/:libroId',component: InformacionComponent},
  {path:'informacion', redirectTo: '/'},
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
    InicioComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
