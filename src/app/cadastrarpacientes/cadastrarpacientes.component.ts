import { Component } from '@angular/core';
import { PacientesService } from '../models/pacientes.service';

@Component({
  selector: 'app-cadastrarpacientes',
  templateUrl: './cadastrarpacientes.component.html',
  styleUrls: ['./cadastrarpacientes.component.css']
})
export class CadastrarPacientesComponent {
  paciente = {
    nome: '',
    cpf: '',
    email: ''
  };

  constructor(private pacientesService: PacientesService) {}

  // Método chamado quando o formulário é enviado
  onSubmit() {
    this.pacientesService.adicionarPaciente(this.paciente).subscribe(response => {
      console.log('Paciente cadastrado:', response);
      
      // Limpar os campos do formulário após o envio
      this.paciente.nome = '';
      this.paciente.cpf = '';
      this.paciente.email = '';
    }, (error: any) => {
      console.error('Erro ao cadastrar paciente:', error);
    });
  }

  // Método para cancelar e limpar os campos
  cancelar() {
    this.paciente.nome = '';
    this.paciente.cpf = '';
    this.paciente.email = '';
  }
}
