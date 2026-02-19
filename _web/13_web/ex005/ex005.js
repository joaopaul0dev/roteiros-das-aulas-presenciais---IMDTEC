const body = document.querySelector('body')
const li = document.querySelectorAll('li')

li.forEach(function(itens){
    itens.style.color='red'
})

const nome = document.querySelector('span#nome')
const idade = document.querySelector('span#idade')
const cidade = document.querySelector('span#cidade')

body.style.fontFamily ='Arial, sans-serif'
nome.innerHTML = 'João Paulo'
idade.innerHTML = '18 anos'
cidade.innerHTML = 'Natal'
document.createElement('img')

const img = document.createElement('img')
img.src = '13_web/ex005/imd.png'
body.appendChild(img)

document.querySelectorAll('*').forEach(function(el) {
    el.style.fontFamily = 'Arial, sans-serif';})