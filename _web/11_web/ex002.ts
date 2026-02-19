class Conta_corrente{
    private _nome_correntista: string = '';
    private _cpf_correntista: string = '';
    private _saldo_correntista:number = 1000;

    //alterar o nome
    get setNome(): string{
        return this._nome_correntista;
    }

    set setNome(nome: string){
        this._nome_correntista = nome;
    }


    //alterar CPF;
    get setCPF(): string{
        return this._cpf_correntista;
    }

    set setCPF(cpf: string){
        this._cpf_correntista = cpf;
    }


    //alterar saldo
    get setSaldo(): number{
        return this._saldo_correntista;
    }

    set setSaldo(saldo: number){
        this._saldo_correntista = saldo;
    }


    //adicionar deposito;
    depositar (valor: number) {
    this._saldo_correntista += valor;
    return this._saldo_correntista;
}
    //reduzir valor do saque;
    sacar (valor: number) {
    this._saldo_correntista -= valor;
    return this._saldo_correntista;
}

}


let c = new Conta_corrente();
c.setNome = "João Paulo"


let r = new Conta_corrente();
r.setCPF = "123.456.789-10"

let j = new Conta_corrente();
j.setSaldo = 10000;


let conta = new Conta_corrente();



conta.depositar(500);
conta.sacar(250);

console.log("Informações da conta corrente:");
console.log("Nome: " + c.setNome);
console.log("CPF: " + r.setCPF);
console.log("Saldo final: " + conta.setSaldo);
