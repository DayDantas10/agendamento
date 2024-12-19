import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../agendamento.service';
import { Especialidade } from '../models/especialidades';

@Component({
  selector: 'app-agendamentoconsulta',
  templateUrl: './agendamento-consulta.component.html',
  styleUrls: ['./agendamento-consulta.component.css']
})
export class AgendamentoConsultaComponent implements OnInit{
  especialidade: string = '';
  especialidades : any[] = [];
  data: string = '';
  horario: string = '';
  cpf: string = '';
  medicos: any[] = []; // Lista de médicos retornada da API
  medicoSelecionado: any = null; // Médico selecionado para o agendamento
  mensagem: string = ''; // Mensagem de erro ou sucesso

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.agendamentoService.buscarEspecialidades().subscribe((data: Especialidade[]) => {
      this.especialidades = data;
    });
  }

  onButtonClick():void {
    //this.agendamentoService.buscarMedicos(this.especialidade, this.)
  }

  onSelectedEspecialidade(event : Event): void {
    const selectEspecialidade = event.target as HTMLSelectElement;
    this.especialidade = selectEspecialidade.value;
    this.buscarMedicos();

  }

  // Método para buscar médicos com base na especialidade, data e horário
  buscarMedicos(): void {
    if (!this.especialidade) {
      this.mensagem = 'Escolha uma especialidade!';
      return;
    }
    this.agendamentoService.buscarMedicos(this.especialidade)
      .subscribe(data => {
        this.medicos = data;
        console.log(this.medicos);
        if (this.medicos.length === 0) {
          this.mensagem = 'Nenhum médico disponível para esse horário!';
        }
      }, error => {
        this.mensagem = 'Erro ao buscar médicos. Tente novamente!';
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

    this.agendamentoService.agendarConsulta(this.cpf, this.medicoSelecionado.crm, this.data, this.horario)
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
