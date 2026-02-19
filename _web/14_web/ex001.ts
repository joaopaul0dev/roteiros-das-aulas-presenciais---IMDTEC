class animal{
    public grupo:string = 'indefinido'
}

class cachorro extends animal {
    constructor(grupo:string) {
        super()
        grupo = 'mamifero'
    }
}