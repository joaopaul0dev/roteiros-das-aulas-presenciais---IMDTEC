export class mesaDejantar{

    material: string;
    lugares: number;
    preco: number;
    

    constructor(material:string, lugares?: number, preco?: number){
        this.material = material;
        

        if(lugares != undefined){
            this.lugares = lugares;
        }else{
            this.lugares = 4;
        }     
        
        if(preco != undefined){
            this.preco = preco;
        }else{
            this.preco = 0;
        }
    }

        detalhar(){
        console.log("=== Detalhes da Mesa ===");
        console.log(`Material: ${this.material}`);
        console.log(`Lugares: ${this.lugares}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log("========================");
    }
}

let mesa1 = new mesaDejantar('metal', 8, 100);
mesa1.detalhar();