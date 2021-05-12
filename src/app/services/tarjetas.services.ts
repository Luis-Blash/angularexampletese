import { Injectable } from '@angular/core';

@Injectable()
export class TarjetasServices {
    private objetotarjetas: InterfaceTarjeta[] = [
      {
        id: '1',
        imagen: 'assets/f1.jpg',
        titulo: 'prueba 1',
        descripcion: 'Esta es una prueba uno',
        icono: 'assets/lupa.ico',
      },
      {
        id: '2',
        imagen: 'assets/f2.jpg',
        titulo: 'prueba 2',
        descripcion: 'Esta es una prueba dos',
        icono: 'assets/lupa.ico'
      }
    ];

    gettarjetas(): any{
        return this.objetotarjetas;
    }

    recuperaid(id:number): InterfaceTarjeta{
      return this.objetotarjetas[id];
    }
}

export interface InterfaceTarjeta{
  id: string
  imagen: string;
  titulo: string;
  descripcion: string;
  icono: string;
}
