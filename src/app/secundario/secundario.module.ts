import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [CarouselComponent, NavbarComponent],
  exports:[CarouselComponent,NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class SecundarioModule { }
