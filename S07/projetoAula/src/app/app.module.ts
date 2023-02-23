;
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjeinhoAulaComponent } from "../components/projeinho-aula/projeinho-aula.component";
import { ProjetinhoComponent } from 'src/components/projetinho/projetinho.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjeinhoAulaComponent,
    ProjetinhoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
