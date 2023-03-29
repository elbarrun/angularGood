import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { HttpClientModule } from '@angular/common/http';

import { LibroclickedService } from './libroclicked.service';


const rutas: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'informacion/:libroId', component: InformacionComponent },
  { path: 'listado-libros', component: LibrosComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LibrosComponent,
    CabeceraComponent,
    ServiciosComponent,
    InicioComponent,
    InformacionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]

})
export class AppModule {



}
