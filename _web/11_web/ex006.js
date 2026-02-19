function calcularArea(propriedade, formula) {
    return formula(propriedade);
}

var AreaQuad = calcularArea(5, function (lado) {
    return lado * lado
})

var areaCirc = calcularArea(2, function (raio) {
    return Math.PI * (Math.pow(2, raio))
})

console.log(areaCirc, ' ', AreaQuad)