import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AcercaComponent } from './acerca/acerca.component';
import { DocumentosComponent } from './documentos/documentos.component';



@NgModule({
  declarations: [CarouselComponent, NavbarComponent, AyudaComponent, AcercaComponent, DocumentosComponent],
  exports:[CarouselComponent,NavbarComponent, AyudaComponent, AcercaComponent, DocumentosComponent],
  imports: [
    CommonModule
  ]
})
export class SecundarioModule { }
