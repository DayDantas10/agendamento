import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../medicos';
@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private apiUrl = 'http://localhost:3000'; // URL da API
  constructor(private http: HttpClient) {}

  // Método para adicionar um paciente enviando uma requisição POST
  adicionarEspecialidade(medico: Medico): Observable<any> {
    return this.http.post(`${this.apiUrl}/medico`, medico);
  }

}
