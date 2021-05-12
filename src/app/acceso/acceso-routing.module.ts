import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'registro', component: RegistrarseComponent},
    {path: 'recuperar', component: RecuperarContrasenaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoRoutingModule { }
