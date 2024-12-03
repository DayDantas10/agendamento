import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarmedicosComponent } from './cadastrarmedicos/cadastrarmedicos.component';
import { BuscarmedicosComponent } from './buscarmedicos/buscarmedicos.component';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarmedicosComponent,
    BuscarmedicosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
