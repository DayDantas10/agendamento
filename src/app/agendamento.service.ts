import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialidade } from './models/especialidades';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private apiUrl = 'http://localhost:3000'; // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para buscar médicos com base na especialidade, data e horário
  buscarEspecialidades(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(`${this.apiUrl}/especialidade`);
  }

  // Método para buscar médicos com base na especialidade, data e horário
  buscarMedicos(especialidade: String): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listarmedicosporespecialidade/${especialidade}`);
  }

  // Método para agendar consulta
  agendarConsulta(cpf: string, crm: string, data: string, horario: string): Observable<any> {
    const agendamento = {
      cpf,
      crm,
      especialidade: 'Exemplo', // A especialidade pode ser derivada da escolha do médico
      data,
      horario
    };
    return this.http.post<any>(`${this.apiUrl}/agendar-consulta`, agendamento);
  }
}
