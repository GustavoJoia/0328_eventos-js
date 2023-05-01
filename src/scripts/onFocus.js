let focus = document.querySelector('#focus')

focus.onfocus = function(){
    focus.style.backgroundColor = 'pink';
}

focus.onblur = function(){
    focus.style.backgroundColor = '#000'
}