import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AcercaComponent } from './acerca/acerca.component';
import { DocumentosComponent } from './documentos/documentos.component';
import {RouterModule} from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { DetallestarjetaComponent } from './tarjeta/detallestarjeta/detallestarjeta.component';



@NgModule({
  declarations: [CarouselComponent, NavbarComponent, AyudaComponent, AcercaComponent, DocumentosComponent, TarjetaComponent, DetallestarjetaComponent],
  exports: [CarouselComponent, NavbarComponent, AyudaComponent, AcercaComponent, DocumentosComponent,TarjetaComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SecundarioModule { }
