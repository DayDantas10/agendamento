import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../models/buscar.service';


@Component({
  selector: 'app-buscarmedicos',
  templateUrl: './buscarmedicos.component.html',
  styleUrls: ['./buscarmedicos.component.css']
})
export class BuscarMedicosComponent implements OnInit {

  nome: string = '';
  especialidade: string = '';
  horarios: any[] = [];

  // Definindo a lista de médicos e horários, inicializada via serviço
  listaDeHorarios: any[] = [];
especialidadeSelecionada: any;

  constructor(private BuscarService: BuscarService) {}

  ngOnInit() {
    // Carregar dados de médicos e horários ao iniciar o componente
    this.buscarMedicosHorarios();
  }

  // Método para buscar médicos e horários da API
  buscarMedicosHorarios() {
    this.BuscarService.getMedicosHorarios().subscribe(
      (data) => {
        this.listaDeHorarios = data;
        this.horarios = data; // Inicializar com todos os horários
      },
      (error) => {
        console.error('Erro ao buscar dados', error);
      }
    );
  }

  // Método para buscar horários disponíveis com base no nome e especialidade
  onSearch() {
    this.horarios = this.listaDeHorarios.filter(horario => {
      const nomeMatch = this.nome ? horario.medico.toLowerCase().includes(this.nome.toLowerCase()) : true;
      const especialidadeMatch = this.especialidade ? horario.especialidade.toLowerCase() === this.especialidade.toLowerCase() : true;
      return nomeMatch && especialidadeMatch;
    });
  }

  // Método para agendar o horário
  agendar(horario: any) {
    alert(`Você agendou o horário com ${horario.medico} para ${horario.horario}`);
  }
}
