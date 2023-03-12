import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layout/full/full.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuComponent } from './component/menu/menu.component';
import { EmailPipe } from './comom/pipes/email.pipe';
import { ListComponent } from './pages/products/list/list.component';
import { CreateComponent } from './pages/products/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    WrapperComponent,
    LoginComponent,
    MenuComponent,
    EmailPipe,
    ListComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmailPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
