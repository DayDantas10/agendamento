import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {
  apiUrl = 'http://localhost:3000'; // URL da API

  constructor(private http: HttpClient) {}

  // Método para buscar médicos e horários
  getMedicosHorarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
