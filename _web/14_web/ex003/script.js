let pot = document.querySelector('button#potencia-button')
pot.addEventListener('click', potencia)

let met = document.querySelector('button#metade-button')
met.addEventListener('click', metade)

let area = document.querySelector('button#area-button')
area.addEventListener('click', areaC)

var div = document.getElementById('solucao').innerHTML

function potencia() {
    let input = document.getElementById('potencia-input').value;
    let result = Math.pow(2, input)
    document.getElementById('solucao').innerHTML = result
}

function metade() {
    let input = document.getElementById('metade-input').value
    let result = Math.trunc(input / 2)
    document.getElementById('solucao').innerHTML = result
}

function areaC() {
    let input = document.getElementById('area-input').value
    let result = Math.PI * Math.pow(input, 2)
    document.getElementById('solucao').innerHTML = result.toFixed(1) 
    

}