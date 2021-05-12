import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoRoutingModule } from './acceso-routing.module';
import { IniciarSeccionComponent } from './iniciar-seccion/iniciar-seccion.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';


@NgModule({
  declarations: [IniciarSeccionComponent, RecuperarContrasenaComponent, RegistrarseComponent],
  exports: [IniciarSeccionComponent],
  imports: [
    CommonModule,
    AccesoRoutingModule
  ]
})
export class AccesoModule { }
