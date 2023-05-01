let slt = document.querySelector('#cngExemplo')
let resposta = document.querySelector('#resposta')
let message = document.querySelector('.msg')

slt.onchange = function(){
    let select = parseInt(slt.value)
    let txt

    if(select == 0){
        txt = ''
        message.style.display = "none"
    } else if(select == 1){
        txt = 'Prefiro maçãs'
        message.style.display = "block";
    } else if(select == 2){
        txt = 'Prefiro uvas'
        message.style.display = "block";
    } else {
        txt = 'Prefiro laranjas'
        message.style.display = "block";
    }

    resposta.textContent = txt
}