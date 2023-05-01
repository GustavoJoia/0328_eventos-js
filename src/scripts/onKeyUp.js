let textArea = document.querySelector('#textKeyUp')
let contagem = document.querySelector('#contagem')
let numContagem = parseInt(contagem.value)

textArea.onkeyup = function(){
    numContagem += 1
    contagem.value = numContagem
}