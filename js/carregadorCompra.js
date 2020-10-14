let gaveta = []

carregarItem()

function carregarItem () {
    gaveta = JSON.parse(localStorage.getItem('item')) || []
    nCompra.textContent = gaveta.length
}