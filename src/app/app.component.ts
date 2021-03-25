import { Component } from '@angular/core';

@Component({
  // Darle un nombre al componente
  selector: 'app-root',
  // Donde va estar
  templateUrl: './app.component.html',
  // El css de mi componete
  styleUrls: ['./app.component.css']
})
// Variables que se pueden utilizar en el html
export class AppComponent {
  title = 'practica1';
}
