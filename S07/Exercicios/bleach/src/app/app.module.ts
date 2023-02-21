import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BleachComponent } from "../components/bleach/bleach.component";
import { GaleriaComponent } from 'src/components/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    BleachComponent,
    GaleriaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
