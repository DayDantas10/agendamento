import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrarmedicos',
  templateUrl: './cadastrarmedicos.component.html',
  styleUrls: ['./cadastrarmedicos.component.css']
})
export class CadastrarmedicosComponent {
  // Propriedades para armazenar os dados do formulário
  CRM: string = '';
  nome: string = '';
  CodEspe: string = '';
medico: any;

  // Função chamada ao submeter o formulário
  onSubmit() {
    if (this.isFormValid()) {
      console.log('Formulário enviado com sucesso');
      console.log('CRM:', this.CRM);
      console.log('Nome:', this.nome);
      console.log('Especialidade:', this.CodEspe);

      // Aqui você pode adicionar a lógica para enviar os dados para o backend ou serviço
    } else {
      console.log('Formulário inválido');
    }
  }

  // Função de validação do formulário
  isFormValid(): boolean {
    return this.CRM !== '' && this.nome !== '' && this.CodEspe !== '';
  }

  // Função chamada ao clicar no botão "Cancelar"
  cancelar() {
    this.CRM = '';
    this.nome = '';
    this.CodEspe = '';
    console.log('Cadastro cancelado');
  }
}
