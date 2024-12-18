import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agendamento-consulta',
  templateUrl: './agendamento-consulta.component.html',
  styleUrls: ['./agendamento-consulta.component.css']
})
export class AgendamentoConsultaComponent {
  cpf: string = '';
  crm: string = '';
  dataHora: string = '';especialidade: string = '';
  nome: string = '';
  medicos: any[] = [];
  horarios: any[] = [];
  
  constructor(private http: HttpClient) {}
  buscarMedicos(): void {
    this.http.get<any[]>(`http://localhost:3000/medicos?nome=${this.nome}&especialidade=${this.especialidade}`)
      .subscribe(data => {
        this.medicos = data;
      });
  }

  buscarHorarios(crm: string): void {
    const data = new Date().toISOString().split('T')[0]; // Pega a data atual
    this.http.get<any[]>(`http://localhost:3000/horarios?crm=${crm}&data=${data}`)
      .subscribe(data => {
        this.horarios = data;
      });
  }
  agendarConsulta(): void {
    this.http.post('http://localhost:3000/agendar', {
      cpf: this.cpf,
      crm: this.crm,
      data_hora: this.dataHora
    })
    .subscribe(response => {
      alert('Consulta agendada com sucesso!');
    });
  }
}
