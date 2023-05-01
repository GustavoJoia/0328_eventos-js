let seg
let cronometro;
let parar = document.querySelector('#stop')
let count = document.querySelector('#count')

document.body.onload = function(){
    cronometro = setInterval(()=>{timer();}, 1000)
}


parar.onclick = function(){
    clearInterval(cronometro)
}

function timer(){
   count.textContent = parseInt(count.textContent)+1
}