import { Component } from '@angular/core';

@Component({
  selector: 'app-buscarmedicos',
  templateUrl: './buscarmedicos.component.html',
  styleUrls: ['./buscarmedicos.component.css']
})
export class BuscarMedicosComponent {

  nome: string = '';
  especialidade: string = '';
  horarios: any[] = [];

  // Simulando uma lista de médicos e horários
  listaDeHorarios = [
    { medico: 'Dr. João', especialidade: 'Cardiologia', horario: '10:00', disponivel: true },
    { medico: 'Dr. João', especialidade: 'Cardiologia', horario: '14:00', disponivel: true },
    { medico: 'Dr. Maria', especialidade: 'Ortopedia', horario: '09:00', disponivel: true },
    { medico: 'Dr. Maria', especialidade: 'Ortopedia', horario: '11:00', disponivel: true },
    { medico: 'Dr. José', especialidade: 'Neurologia', horario: '15:00', disponivel: true },
    { medico: 'Dr. José', especialidade: 'Neurologia', horario: '16:00', disponivel: true },
    { medico: 'Dr. Paula', especialidade: 'Pediatria', horario: '08:00', disponivel: true },
    { medico: 'Dr. Paula', especialidade: 'Pediatria', horario: '13:00', disponivel: true }
  ];

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
    // Aqui você pode adicionar lógica para armazenar o agendamento, por exemplo, chamando uma API ou serviço
  }
}
