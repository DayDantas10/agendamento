import { Component } from '@angular/core';
import { MedicosService } from '../models/medicos.service';

@Component({
  selector: 'app-cadastrarmedicos',
  templateUrl: './cadastrarmedicos.component.html',
  styleUrls: ['./cadastrarmedicos.component.css']
})
export class CadastrarmedicosComponent {
  medico ={
  CRM:   '',
  nome:   '',
  CodEspe:  ''

  };

  constructor(private medicosSevice: MedicosService){}
  // Função chamada ao submeter o formulário
  onSubmit() {
    this.medicosSevice.adicionarMedico(this.medico).subscribe(response => {
      console.log('Médico cadastrado:', response);
      alert('Médico cadastrado com sucesso!');
      // Limpar os campos do formulário após o envio
      this.medico.CRM= '';
      this.medico.nome = '';
      this.medico.CodEspe = '';
    }, (error: any) => {
      console.error('Erro ao cadastrar :', error);
    });
  }
  // Método para cancelar e limpar os campos
  cancelar() {
    this.medico.CRM = '';
    this.medico.nome = '';
    this.medico.CodEspe = '';
  }
  }

