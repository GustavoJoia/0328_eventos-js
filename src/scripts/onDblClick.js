let btn = document.querySelector('#clickBtn')
let box = document.querySelector('#box')

btn.ondblclick = function (){
    let corFundo = Math.floor(Math.random()*16777215).toString(16)
    box.style.backgroundColor = '#'+corFundo
}