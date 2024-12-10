import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  // Simulação de uma lista de pacientes armazenada localmente (poderia ser uma API no futuro)
  private pacientes: { nome: string; cpf: string; email: string }[] = [];

  constructor() { }

  // Método para adicionar um paciente à lista
  adicionarPaciente(paciente: { nome: string; cpf: string; email: string }) {
    this.pacientes.push(paciente); // Adiciona o paciente à lista
    console.log('Paciente adicionado:', paciente);
  }

  // Método para obter todos os pacientes cadastrados
  getPacientes() {
    return this.pacientes; // Retorna a lista de pacientes
  }

  // Método para remover um paciente com base no CPF
  removerPaciente(cpf: string) {
    this.pacientes = this.pacientes.filter(p => p.cpf !== cpf); // Remove o paciente com o CPF especificado
    console.log(`Paciente com CPF ${cpf} removido.`);
  }
}
