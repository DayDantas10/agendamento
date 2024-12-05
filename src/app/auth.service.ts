import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validCpf = '12345678900';  // CPF de exemplo (em um projeto real, você deve consultar um backend)
  private validPassword = '1234';     // Senha de exemplo

  constructor() {}

  // Método para autenticar o usuário
  login(cpf: string, password: string): boolean {
    // Verifica se o CPF e a senha correspondem aos valores válidos
    if (cpf === this.validCpf && password === this.validPassword) {
      // Simula a autenticação bem-sucedida
      localStorage.setItem('isLoggedIn', 'true');  // Armazena a informação de login
      return true;
    }
    return false;  // Retorna false se as credenciais forem inválidas
  }

  // Método para deslogar o usuário
  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  // Método para verificar se o usuário está autenticado
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
