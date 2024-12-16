import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private apiUrl = 'http://localhost:3000'; // URL da API

  constructor(private http: HttpClient) {}

  // Método para adicionar um paciente enviando uma requisição POST
  adicionarPaciente(paciente: Paciente): Observable<any> {
    return this.http.post(`${this.apiUrl}/paciente`, paciente);
  }

  // Método para obter todos os pacientes cadastrados (simulação)
  getPacientes(cpf:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/paciente/cpf`);
  }
}