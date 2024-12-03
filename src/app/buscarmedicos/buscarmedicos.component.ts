import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from '../models/medicos.service';
import { Medicos } from '../medicos';

@Component({
  selector: 'app-buscarmedicos',
  templateUrl: './buscarmedicos.component.html',
  styleUrl: './buscarmedicos.component.css'
})
export class BuscarmedicosComponent {
formBusca: FormGroup 
medicos: Medicos | undefined
constructor(private fb: FormBuilder,
            private fs: MedicosService){
  this.formBusca = this.fb.group({
    nome: ['', [Validators.required,]] /*Digitar pelo menos 1 letra*/
  })
}

buscar(){
  const nome = this.formBusca.value.nome /*retorna um objeto json*/
  this.fs.buscarPeloNome(nome).subscribe(
    res=> { /** resposta concreta ou vazia */
      this.medicos = res.Search /**resposta da requisição atribuída ao objeto filme */
    }
  )
}
}