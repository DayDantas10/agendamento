import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrarmedicos',
  templateUrl: './cadastrarmedicos.component.html',
  styleUrls: ['./cadastrarmedicos.component.css']
})
export class CadastrarmedicosComponent {
  // Propriedades para armazenar os dados do formulário
  crm: string = '';
  name: string = '';
  specialty: string = '';

  // Função chamada ao submeter o formulário
  onSubmit() {
    if (this.isFormValid()) {
      console.log('Formulário enviado com sucesso');
      console.log('CRM:', this.crm);
      console.log('Nome:', this.name);
      console.log('Especialidade:', this.specialty);

      // Aqui você pode adicionar a lógica para enviar os dados para o backend ou serviço
    } else {
      console.log('Formulário inválido');
    }
  }

  // Função de validação do formulário
  isFormValid(): boolean {
    return this.crm !== '' && this.name !== '' && this.specialty !== '';
  }

  // Função chamada ao clicar no botão "Cancelar"
  cancelar() {
    this.crm = '';
    this.name = '';
    this.specialty = '';
    console.log('Cadastro cancelado');
  }
}
