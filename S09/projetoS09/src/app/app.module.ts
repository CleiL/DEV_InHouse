import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieComponent } from "../components/serie/serie.component";
import { ListaEpisodiosComponent } from 'src/components/lista-episodios/lista-episodios.component';
import { HomeComponent } from 'src/components/home/home.component';
import { CardSerieComponent } from 'src/components/card-serie/card-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieComponent,
    ListaEpisodiosComponent,
    HomeComponent,
    CardSerieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
