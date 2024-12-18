import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private apiUrl = 'http://localhost:3000'; // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para buscar médicos com base na especialidade, data e horário
  buscarMedicos(especialidade: string, data: string, horario: string): Observable<any[]> {
    const params = {
      especialidade,
      data,
      horario
    };
    return this.http.get<any[]>(`${this.apiUrl}/buscar-medicos`, { params });
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
