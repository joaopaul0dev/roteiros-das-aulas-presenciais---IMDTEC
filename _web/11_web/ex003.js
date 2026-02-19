function idade(input) {
    ano = Math.trunc(input*360)
    mes = input*30    
     return {ano: ano,mes: mes, input: input}
}

let c = idade(200)
console.log('==============')
console.log('ano: ' + ano)
console.log('mes: ' + mes)
console.log('input: ' + input)
console.log('==============')