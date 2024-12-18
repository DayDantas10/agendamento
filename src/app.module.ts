import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando o FormsModule

import { AppComponent } from './app/app.component';
import { CadastrarmedicosComponent } from './app/cadastrarmedicos/cadastrarmedicos.component'; // Seu componente
import { CadastrarEspecialidadeComponent } from './app/cadastrarespecialidade/cadastrarespecialidade.component';
import { CadastrarPacientesComponent } from './app/cadastrarpacientes/cadastrarpacientes.component';
import { BuscarMedicosComponent } from './app/buscarmedicos/buscarmedicos.component';
import { MenuComponent } from './app/menu/menu.component';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { LoginComponent } from './app/login/login.component';
import { CadastrarhorariosComponent } from './app/cadastrarhorarios/cadastrarhorarios.component';
import { AppRoutingModule } from './app/app-routing.module';
import { HomeComponent } from './app/home/home.component'; // Importando o AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastrarmedicosComponent,
    CadastrarEspecialidadeComponent,
    CadastrarPacientesComponent, 
    BuscarMedicosComponent,
    LoginComponent,
    CadastrarhorariosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicionando o FormsModule aos imports
    AppRoutingModule // Adicionando o AppRoutingModule para configurar as rotas
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
