import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SerieComponent } from './pages/serie/serie.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { WithMenuComponent } from './layout/with-menu/with-menu.component';
import { AuthguardGuard } from './security/guard/authguard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    SerieComponent,
    MenuComponent,
    LoginComponent,
    WithMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
