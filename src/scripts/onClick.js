let clickBtn = document.querySelector('#clickBtn')
let message = document.querySelector('#msg')

clickBtn.onclick = function() {

    message.style.display = "block";
    
    setTimeout(function() {
        message.style.display = "none"
    }, 3000);

}