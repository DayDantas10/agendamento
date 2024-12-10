import { Component } from '@angular/core';

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

  // Método chamado quando o formulário é enviado
  onSubmit() {
    console.log('Paciente cadastrado:', this.paciente);

    // Limpar os campos do formulário após o envio
    this.paciente.nome = '';
    this.paciente.cpf = '';
    this.paciente.email = '';
  }

  // Método para cancelar e limpar os campos
  cancelar() {
    this.paciente.nome = '';
    this.paciente.cpf = '';
    this.paciente.email = '';
  }
}
