let input = document.querySelector('#txtExemplo')
let resposta = document.querySelector('#resposta')




input.oninput = function(){
    while(input.value == null){
        resposta.textContent = "O que você digitar vai aparecer aqui"
    }
    resposta.textContent = input.value
}