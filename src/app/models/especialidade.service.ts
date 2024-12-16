import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidade } from './especialidades';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {
  private apiUrl = 'http://localhost:3000'; // URL da API
  constructor(private http: HttpClient) {}

  // Método para adicionar um paciente enviando uma requisição POST
  adicionarEspecialidade(especialidade: Especialidade): Observable<any> {
    return this.http.post(`${this.apiUrl}/especialidade`, especialidade);
  }
}
