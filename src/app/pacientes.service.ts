import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private apiUrl = 'http://localhost:3000/paciente'; // URL da API

  constructor(private http: HttpClient) {}

  // Método para adicionar um paciente enviando uma requisição POST
  adicionarPaciente(paciente: { nome: string; cpf: string; email: string }): Observable<any> {
    return this.http.post(this.apiUrl, paciente);
  }

  // Método para obter todos os pacientes cadastrados (simulação)
  getPacientes() {
    return this.getPacientes;
  }

}