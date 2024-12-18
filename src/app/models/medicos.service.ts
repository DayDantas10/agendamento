import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from './medicos';
import { EspecialidadeService } from './especialidade.service';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private apiUrl = 'http://localhost:3000'; // URL da API
  

  constructor(
    private http: HttpClient,
    private EspecialidadeService: EspecialidadeService  // Injeta o serviço de especialidades
  ) {}

  // Método para adicionar um médico
  adicionarMedico(medico: Medico): Observable<any> {
    // Aqui podemos adicionar a lógica de especialidade se necessário
    return this.http.post(`${this.apiUrl}/medico`, medico);
  }

  // Método para buscar um médico usando o CRM
  getMedico(crm: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/medico/${crm}`); // Corrigido o CRM para ser dinâmico na URL
  }

  // Método para obter todas as especialidades, utilizando o EspecialidadeService
  getEspecialidades(): Observable<any[]> {
    return this.EspecialidadeService.getEspecialidades();
  }
}
