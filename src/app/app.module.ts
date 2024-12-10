import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando o FormsModule

import { AppComponent } from './app.component';
import { CadastrarmedicosComponent } from './cadastrarmedicos/cadastrarmedicos.component'; // Seu componente
import { CadastrarEspecialidadeComponent } from './cadastrarespecialidade/cadastrarespecialidade.component';
import { CadastrarPacientesComponent } from './cadastrarpacientes/cadastrarpacientes.component';
import { BuscarMedicosComponent } from './buscarmedicos/buscarmedicos.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastrarmedicosComponent,
    CadastrarEspecialidadeComponent,
    CadastrarPacientesComponent, 
    BuscarMedicosComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicionando o FormsModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
