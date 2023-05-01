let tecla = document.querySelector('#tecla')
let codStr = document.querySelector('#codStr')
let codNum = document.querySelector('#codNum')

document.onkeydown = function(e){
    tecla.value = e.key;
    codStr.value = e.code;
    codNum.value = e.keyCode;
}