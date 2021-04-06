import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BajasComponent } from './bajas/bajas.component';
import { AltasComponent } from './altas/altas.component';



@NgModule({
  declarations: [BajasComponent, AltasComponent],
  exports:[BajasComponent,AltasComponent],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
