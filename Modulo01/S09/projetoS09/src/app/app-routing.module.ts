import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { SerieComponent } from 'src/components/serie/serie.component';

const routes: Routes = [
  
  // {path:' ', component: SerieComponent},
  {path:'', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
