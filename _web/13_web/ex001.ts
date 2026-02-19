class cidade {
    protected readonly nome: string = 'natal'
    constructor(nome:string){
        this.nome = nome;
    }
}

class pessoa {
    protected nome: string
    constructor(nome: string, cidade: cidade){
        this.nome = nome
    }
}

class animal {
    protected nome: string
    constructor(nome:string, dono: pessoa) {
        this.nome = nome
    }
}

const natal = new cidade("Natal");
const joao = new pessoa("João", natal);
const toto = new animal("Totó", joao);