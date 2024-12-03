import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicos } from '../medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  API_URL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }


  buscarPeloNome(nome: string): 
                Observable<Medicos> {
  return this.http.get<Medicos>(`${this.API_URL}?nome=${nome}`);
  }
}
