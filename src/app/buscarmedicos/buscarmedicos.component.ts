import { Component } from '@angular/core';

@Component({
  selector: 'app-buscarmedicos',
  templateUrl: './buscarmedicos.component.html',
  styleUrl: './buscarmedicos.component.css'
})
export class BuscarmedicosComponent {

}
export class BuscaFilmesComponent {

  formBusca: FormGroup 
  filme: Filme | undefined
  constructor(private fb: FormBuilder,
              private fs: FilmeService){
    this.formBusca = this.fb.group({
      titulo: ['', [Validators.required,
                    Validators.minLength(2)]] /*Digitar pelo menos 1 letra*/
    })
  }

  buscar(){
    const titulo = this.formBusca.value.titulo /*retorna um objeto json*/
    this.fs.buscarPeloTitulo(titulo).subscribe(
      res=> { /** resposta concreta ou vazia */
        this.filme = res.Search /**resposta da requisição atribuída ao objeto filme */
      }
    )
  }

}
