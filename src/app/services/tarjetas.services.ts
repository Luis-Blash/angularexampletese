import { Injectable } from '@angular/core';

@Injectable()
export class TarjetasServices {
    private objetotarjetas: InterfaceTarjeta[] = [
      {
        imagen: 'assets/f1.jpg',
        titulo: 'prueba 1',
        descripcion: 'Esta es una prueba uno',
        icono: 'assets/lupa.ico',
      },
      {
        imagen: 'assets/f2.jpg',
        titulo: 'prueba 2',
        descripcion: 'Esta es una prueba dos',
        icono: 'assets/lupa.ico'
      }
    ];

    gettarjetas(): any{
        return this.objetotarjetas;
    }
}

export interface InterfaceTarjeta{
  imagen: string;
  titulo: string;
  descripcion: string;
  icono: string;
}
