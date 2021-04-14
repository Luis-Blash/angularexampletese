import { Component, OnInit } from '@angular/core';
import {TarjetasServices} from '../../services/tarjetas.services';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  recuperatarjetas: any[] = [];

  constructor(private  tarjetasServices: TarjetasServices) {
  }

  ngOnInit(): void {
    this.recuperatarjetas = this.tarjetasServices.gettarjetas();
    console.log(this.recuperatarjetas);
    console.log('klyus');
  }

}
