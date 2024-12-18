import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrarhorariosService {

  private apiUrl = 'http://localhost:3000'; // Supondo que você tenha uma API para isso

  constructor(private http: HttpClient) { }

  cadastrarHorario(horario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/horarios`, horario)
  }
}
