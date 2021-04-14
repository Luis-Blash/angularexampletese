import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routes';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { MostrarModule } from './mostrar/mostrar.module';
import { SecundarioModule } from './secundario/secundario.module';
import { TarjetasServices } from './services/tarjetas.services';
import { VentasModule } from './ventas/ventas.module';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    VentasModule,
    SecundarioModule,
    MostrarModule,
    ROUTING
  ],
  providers: [TarjetasServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
