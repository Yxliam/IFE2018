window.onload = function(){
    var button = document.querySelector('#j-button'),
        box = document.querySelector('#j-box');
    button.onclick = function(){
        box.classList.toggle('active')
    }
}
