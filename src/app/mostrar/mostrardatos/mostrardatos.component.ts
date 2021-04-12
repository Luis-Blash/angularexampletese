import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrardatos',
  templateUrl: './mostrardatos.component.html',
  styleUrls: ['./mostrardatos.component.css']
})
export class MostrardatosComponent implements OnInit {

  constructor() { }
  nombre = "Luis";
  mis_tarjetas = [
    {
      imagen: "assets/f1.jpg",
      titulo: "Manzana",
      descripcion: "Manzana de color rojo"
    },
    {
      imagen: "assets/f2.jpg",
      titulo: "Mango",
      descripcion: "Mango sabroso"
    },
    {
      imagen: "assets/f3.jpeg",
      titulo: "Fresa",
      descripcion: "Fresa fresin"
    }
  ];
  ngOnInit(): void {
  }

}
