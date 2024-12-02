import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicos } from '../medicos';

/** modificar os dados para buscar médicos */

@Injectable({
  providedIn: 'root' /**pode ser acessado por qualquer componente, dentro do módulo principal */
})
export class MedicosService {
 API_URL = 'https://portal.cfm.org.br/api_rest_php/api/v1/medicos'; /**primeira variável*/
  constructor(private http: HttpClient) { }

  buscarPeloNome(nome: string): Observable<Medicos> {
    return this.http.get<Medicos>(`${this.API_URL}&t=${nome}`); /**consulta http do tipo get */
  }
}
