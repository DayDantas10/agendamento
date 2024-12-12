import { Component } from '@angular/core';
import { EspecialidadeService } from '../models/especialidade.service';
  // Importa o serviço

@Component({
  selector: 'app-cadastrar-especialidade',
  templateUrl: './cadastrarespecialidade.component.html',
  styleUrls: ['./cadastrarespecialidade.component.css']
})
export class CadastrarEspecialidadeComponent {

  especialidade = {
    codigo: '',
    nome: ''
  };

  constructor(private especialidadeService: EspecialidadeService) { }

  // Método chamado quando o formulário é enviado
  onSubmit() {
    // Chama o serviço para adicionar a especialidade
    this.especialidadeService.adicionarEspecialidade(this.especialidade);
    
    // Limpar os campos do formulário após o envio
    this.especialidade.codigo = '';
    this.especialidade.nome = '';
  }

  // Método para limpar os campos do formulário
  cancelar() {
    this.especialidade.codigo = '';
    this.especialidade.nome = '';
  }
}
