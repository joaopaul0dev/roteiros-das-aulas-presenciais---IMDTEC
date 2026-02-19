class computador {
    procesador: string;
    memoria: number;

    constructor(procesador:string, memoria:number) {
        this.procesador = procesador;
        this.memoria = memoria
    }
}

class laptop extends computador {
    protected bateria_wats: number = 0;
    
    constructor(procesador: string, memoria:number, bateria_wats:number){
        super(procesador, memoria);

        this.bateria_wats = bateria_wats
    }
}

class desktop extends computador {
    protected cabinete:string = '';
    constructor(processador: string, memoria:number, cabiente:string) {
        super(processador, memoria)
    }
}