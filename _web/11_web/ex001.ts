class soma {
    private a:number
    private b:number

    constructor(a:number, b:number) {
        this.a = a
        this.b = b
    }

    mostrarSoma(){
        console.log(`a soma de: ${this.a} + ${this.b} é ${this.a + this.b} `)
    }
}
let p = new soma(2,3);
p.mostrarSoma