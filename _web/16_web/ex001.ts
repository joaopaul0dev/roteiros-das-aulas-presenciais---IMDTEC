enum situacao {
    emPreparo,
    finalizada
}

enum tipoPrato {
    Sopa, 
    Sanduiche, 
    Rabada
}

type receita = {
    situacao: situacao,
    tipoPrato: tipoPrato
}

var sanduba:receita = {
    situacao: situacao.emPreparo,
    tipoPrato: tipoPrato.Sanduiche
} 