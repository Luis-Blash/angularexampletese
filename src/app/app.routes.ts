import { RouterModule, Routes } from "@angular/router";
import { CarouselComponent } from "./secundario/carousel/carousel.component";

// configuracion de las rutas
const RUTAS: Routes = [
    {
        path:'carousel', component: CarouselComponent
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'carousel'
    }
];

export const ROUTING = RouterModule.forRoot(RUTAS);