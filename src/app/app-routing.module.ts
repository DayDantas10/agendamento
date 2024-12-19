import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEspecialidadeComponent } from './cadastrarespecialidade/cadastrarespecialidade.component';
import { CadastrarhorariosComponent } from './cadastrarhorarios/cadastrarhorarios.component';
import { CadastrarmedicosComponent } from './cadastrarmedicos/cadastrarmedicos.component';
import { CadastrarPacientesComponent } from './cadastrarpacientes/cadastrarpacientes.component';
import { AgendamentoConsultaComponent } from './agendamento-consulta/agendamento-consulta.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  { path: 'home', component: HomeComponent},
{ path: 'cadastrarmedicos', component: CadastrarmedicosComponent },
{ path: 'cadastrarhorarios', component: CadastrarhorariosComponent },
{ path: 'cadastrarespecialidade', component: CadastrarEspecialidadeComponent },
{ path: 'cadastrarpacientes', component: CadastrarPacientesComponent },
{path: 'agendamento-consulta', component: AgendamentoConsultaComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
