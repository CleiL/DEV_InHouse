import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteUmComponent } from './view/teste-um/teste-um.component';

const routes: Routes = [
  {path:'', component: TesteUmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
