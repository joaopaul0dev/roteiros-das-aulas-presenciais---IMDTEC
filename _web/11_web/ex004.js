function baskara(num1, num2, num3) {
    var a = num1
    var b = num2
    var c = num3
    const delta = (b * b) - (4 * a * c)
    
    if (delta < 0 || a == 0 ) {
        return 'impossivel calcular'
    }

    const raiz1 = (-b + Math.sqrt(delta))/(2*a)
    const raiz2 = (-b - Math.sqrt(delta))/(2*a)
    return `raiz positiva: ${raiz1} raiz negativa: ${raiz2}`
    
}

let y = baskara()