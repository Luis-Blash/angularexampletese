import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './secundario/carousel/carousel.component';
import {AyudaComponent} from './secundario/ayuda/ayuda.component';
import {AcercaComponent} from './secundario/acerca/acerca.component';
import {DocumentosComponent} from './secundario/documentos/documentos.component';

// configuracion de las rutas
const RUTAS: Routes = [
  {path: 'carousel', component: CarouselComponent},
  {path: 'ayuda', component: AyudaComponent},
  {path: 'acerca', component: AcercaComponent},
  {path: 'documentos', component: DocumentosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'carousel'}
];

export const ROUTING = RouterModule.forRoot(RUTAS);
