class personagem {
    atacar(){
        console.log('não recebi dano... ')
    }
}
class arqueiro extends personagem{
    atacar(){
        console.log('recebi 10 de dano')
    }
}

class guerreiro extends personagem{
    atacar(){
        console.log('recebi 20 de dano')
    }
}

function atacarP(fulano:personagem) {
    fulano.atacar()
}

let a = new personagem()
atacarP(a)  