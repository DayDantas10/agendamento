import { Component } from '@angular/core';
import { AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-agendamentoconsulta',
  templateUrl: './agendamento-consulta.component.html',
  styleUrls: ['./agendamento-consulta.component.css']
})
export class AgendarConsultaComponent {
  especialidade: string = '';
  data: string = '';
  horario: string = '';
  cpf: string = '';
  medicos: any[] = [];         // Lista de médicos retornada da API
  medicoSelecionado: any = null; // Médico selecionado para o agendamento
  mensagem: string = '';         // Mensagem de erro ou sucesso

  constructor(private AgendamentoService: AgendamentoService) {}

  // Método para buscar médicos com base na especialidade, data e horário
  buscarMedicos(): void {
    if (!this.especialidade || !this.data || !this.horario) {
      this.mensagem = 'Preencha todos os campos para buscar médicos!';
      return;
    }
    this.AgendamentoService.buscarMedicos(this.especialidade, this.data, this.horario)
      .subscribe(data => {
        this.medicos = data;
        if (this.medicos.length === 0) {
          this.mensagem = 'Nenhum médico disponível para esse horário!';
        }
      });
  }

  // Método para selecionar um médico
  selecionarMedico(medico: any): void {
    this.medicoSelecionado = medico;
    this.mensagem = ''; // Limpa qualquer mensagem anterior
  }

  // Método para agendar consulta
  agendarConsulta(): void {
    if (!this.cpf || !this.medicoSelecionado) {
      this.mensagem = 'Preencha todos os campos e selecione um médico!';
      return;
    }

    this.AgendamentoService.agendarConsulta(this.cpf, this.medicoSelecionado.crm, this.data, this.horario)
      .subscribe(response => {
        this.mensagem = 'Consulta agendada com sucesso!';
        this.resetForm();
      }, error => {
        this.mensagem = 'Erro ao agendar a consulta. Tente novamente!';
      });
  }

  // Método para resetar os campos após o agendamento
  resetForm(): void {
    this.especialidade = '';
    this.data = '';
    this.horario = '';
    this.cpf = '';
    this.medicos = [];
    this.medicoSelecionado = null;
    this.mensagem = '';
  }
}
