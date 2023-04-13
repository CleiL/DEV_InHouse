import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {GaleriaComponent } from "../components/galeria/galeria.component";
import { TesteUmComponent } from './view/teste-um/teste-um.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    TesteUmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
