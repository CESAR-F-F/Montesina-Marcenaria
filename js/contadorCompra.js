const botao1 = document.getElementById ('botao1')
const botao2 = document.getElementById ('botao2')
const botao3 = document.getElementById ('botao3')
const botao4 = document.getElementById ('botao4')
const botao5 = document.getElementById ('botao5')
const botao6 = document.getElementById ('botao6')
const nCompra = document.getElementById ('nCompra')

let gaveta = []

let quantidade = 0

carregarItem()

function iniciar () {

    const item = {
        quantidade: quantidade
    }

    contador()

    gaveta.push(item)
    localStorage.setItem('item', JSON.stringify(gaveta))
}

function contador () {
    quantidade++
    nCompra.textContent = quantidade
}

function carregarItem () {
    gaveta = JSON.parse(localStorage.getItem('item')) || []
    nCompra.textContent = gaveta.length
}

botao1.onclick = () => {
    iniciar()
}

botao2.onclick = () => {
    iniciar()
}

botao3.onclick = () => {
    iniciar()
}

botao4.onclick = () => {
    iniciar()
}

botao5.onclick = () => {
    iniciar()
}

botao6.onclick = () => {
    iniciar()
}

