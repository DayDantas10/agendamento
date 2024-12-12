import { Component } from '@angular/core';
import { AuthService } from '../models/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cpf: string = '';  // Propriedade para armazenar o CPF
  password: string = '';  // Propriedade para armazenar a senha

  constructor(private authservice:AuthService) {}

  // Método chamado quando o formulário de login é enviado
  login() {
    // Chama o método de login do serviço de autenticação com CPF e senha
    if (this.authservice.login(this.cpf, this.password)) {
      console.log('Login bem-sucedido!');
      // Adicione lógica para redirecionar ou mostrar uma mensagem de sucesso
    } else {
      console.log('Credenciais inválidas.');
      // Adicione lógica para mostrar uma mensagem de erro para o usuário
    }
  }
}
