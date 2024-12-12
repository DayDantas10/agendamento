import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {
  adicionarEspecialidade(especialidade: { codigo: string; nome: string; }) {
      throw new Error('Method not implemented.');
  }

  constructor() { }
}
