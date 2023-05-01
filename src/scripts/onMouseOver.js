let txt = document.querySelector('#mouseOver')

txt.onmouseover = function(){
    txt.style.color = '#8f3c6f'
    txt.style.cursor = 'pointer'
    txt.style.transition = '.3s'
}

txt.onmouseout = function(){
    txt.style.color = '#000'
}