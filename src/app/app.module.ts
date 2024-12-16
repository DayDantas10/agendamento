import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando o FormsModule

import { AppComponent } from './app.component';
import { CadastrarmedicosComponent } from './cadastrarmedicos/cadastrarmedicos.component'; // Seu componente
import { CadastrarEspecialidadeComponent } from './cadastrarespecialidade/cadastrarespecialidade.component';
import { CadastrarPacientesComponent } from './cadastrarpacientes/cadastrarpacientes.component';
import { BuscarMedicosComponent } from './buscarmedicos/buscarmedicos.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastrarmedicosComponent,
    CadastrarEspecialidadeComponent,
    CadastrarPacientesComponent, 
    BuscarMedicosComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicionando o FormsModule aos imports
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
