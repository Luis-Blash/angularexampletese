import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TarjetasServices} from '../../services/tarjetas.services';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  recuperatarjetas: any[] = [];

  constructor(private  tarjetasServices: TarjetasServices,
    private ruta: Router) {
  }

  ngOnInit(): void {
    this.recuperatarjetas = this.tarjetasServices.gettarjetas();
    console.log(this.recuperatarjetas);
    console.log('klyus');
  }

  recuperarId(id: number){
    console.log(id);
    this.ruta.navigate(['tarjetadetalle',id]);
    console.log(this.ruta)
  }

}
