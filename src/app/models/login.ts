export class Login{
    private cpf:string

    private senha: string
    
    constructor(
    { cpf, senha }: { cpf: string; senha: string }    ){this.cpf = cpf 
    this.senha = senha}

    public obterCpf():string{
      return this.cpf  
    }

    public obterSenha():string{
        return this.senha
      }
}