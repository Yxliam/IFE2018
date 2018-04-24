window.onload = function(){
    var button = document.querySelector('#j-button'),
        box = document.querySelector('#j-box');
    button.onclick = function(){
        toggle();
    }
    function toggle(){
        box.classList.toggle('active')
    }

}
