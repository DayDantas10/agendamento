import { Component } from '@angular/core';
import { CadastrarhorariosService } from '../models/cadastrarhorarios.service';


@Component({
  selector: 'app-cadastrar-horarios',
  templateUrl: './cadastrarhorarios.component.html',
  styleUrls: ['./cadastrarhorarios.component.css']
})
export class CadastrarhorariosComponent {

  horario = { medico_id: '', horario: '', disponivel: true };

  constructor(private CadastrarhorariosService: CadastrarhorariosService) { }

  onSubmit() {
    this.CadastrarhorariosService.cadastrarHorario(this.horario).subscribe(
      (response) => {
        console.log('Horário cadastrado com sucesso!', response);
        alert('Horário cadastrado com sucesso!');
      },
      (error) => {
        console.error('Erro ao cadastrar horário', error);
        alert('Erro ao cadastrar horário!');
      }
    );
  }

  cancelar() {
    // Lógica para cancelar
  }
}
