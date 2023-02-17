import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjeinhoAulaComponent } from "../components/projeinho-aula/projeinho-aula.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjeinhoAulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
