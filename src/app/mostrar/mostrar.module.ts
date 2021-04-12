import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrardatosComponent } from './mostrardatos/mostrardatos.component';



@NgModule({
  declarations: [MostrardatosComponent],
  exports:[MostrardatosComponent],
  imports: [
    CommonModule
  ]
})
export class MostrarModule { }
