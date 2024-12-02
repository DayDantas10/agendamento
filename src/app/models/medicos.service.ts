import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  constructor(private http: HttpClient) { }


  buscarPeloNome(nome: string): 
                Observable<any> {
  return this.http.get<any>('')
  }
}
