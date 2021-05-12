import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarjetasServices } from 'src/app/services/tarjetas.services';

@Component({
  selector: 'app-detallestarjeta',
  templateUrl: './detallestarjeta.component.html',
  styleUrls: ['./detallestarjeta.component.css']
})
export class DetallestarjetaComponent implements OnInit {
  informacionIndividual: any = {};

  constructor(private activaRuta: ActivatedRoute,
    private tarjetaServicios:TarjetasServices) { 

    this.activaRuta.params.subscribe(params => {
      this.informacionIndividual = this.tarjetaServicios.recuperaid(params.id)
      console.log(this.informacionIndividual);
    })

  }

  ngOnInit(): void {
  }

}
