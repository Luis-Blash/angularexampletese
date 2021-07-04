import { Component, OnInit } from '@angular/core';
import { AudioServices } from 'src/app/services/audio.services';

@Component({
  selector: 'app-iniciar-seccion',
  templateUrl: './iniciar-seccion.component.html',
  styleUrls: ['./iniciar-seccion.component.css']
})

export class IniciarSeccionComponent implements OnInit {
  play: boolean = true;

  constructor() { }

  ngOnInit(): void {
    //this.audio = this.AudioService.setAudio("../../assets/sonido.ogg");
  }

  sonido(){
    if(this.play){
      this.play = false;
      const audio = new Audio("../../assets/sonido.ogg");
      audio.play();
      setTimeout(() => {
        this.play = true;
      }, 5000);
    }
  }
}
