import { Component } from '@angular/core';
import { EspecialidadeService } from '../models/especialidade.service';
  // Importa o serviço

@Component({
  selector: 'app-cadastrarespecialidade',
  templateUrl: './cadastrarespecialidade.component.html',
  styleUrls: ['./cadastrarespecialidade.component.css']
})
export class CadastrarEspecialidadeComponent {

  especialidade = {
    CodEspe: '',
    nome: ''
  };

  constructor(private especialidadeService: EspecialidadeService) { }

  onSubmit() {
    console.log('Enviando especialidade...', this.especialidade);  // Para depuração
    this.especialidadeService.adicionarEspecialidade(this.especialidade)
      .subscribe(response => {
        console.log('Resposta do servidor:', response); 
        alert('Especialidade cadastrada com sucesso!'); // Para verificar a resposta da API
      }, error => {
        console.error('Erro ao adicionar especialidade:', error);  // Para ver os erros
      });
    this.especialidade.CodEspe = '';
    this.especialidade.nome = '';
  }
  
  // Método para limpar os campos do formulário
  cancelar() {
    this.especialidade.CodEspe = '';
    this.especialidade.nome = '';
  }
}
