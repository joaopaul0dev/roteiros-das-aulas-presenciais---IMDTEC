class pet {
    nome: string
    constructor(nome: string) { this.nome = nome }
}

class livro {
    nome: string
    constructor(nome: string) { this.nome = nome }
}

class colecao<T> {
    private itens: T[] = []

    adicionar(itens: T): void {
        this.itens.push(itens);
    }

    mostrar() {
        console.log(this.itens)
    }
}
const meusLivrosPrediletos = new colecao<livro>();
const animais = new colecao<pet>();
const dom_quixote = new livro("Dom Quixote")
const a_divina_comedia = new livro("A Divina Comédia")
meusLivrosPrediletos.adicionar(dom_quixote)
meusLivrosPrediletos.adicionar(a_divina_comedia)
const toto = new pet("Totó");
const fofo = new pet("Fofo");
animais.adicionar(toto);
animais.adicionar(fofo);
meusLivrosPrediletos.mostrar();
animais.mostrar();