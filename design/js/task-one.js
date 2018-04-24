window.onload = function(){
    var button = document.querySelector('#j-button'),
        line = document.querySelector('#j-line'),
        text = document.querySelector('#j-text'),
        flag = false;
    button.onclick = function(){
        toggle();
    }
    function toggle(){
        if(flag){
            line.style.width = '100px'
            text.style.color = 'blue';
        }else{
            line.style.width = '0'
            text.style.color = 'black';
        }
        flag = !flag;
    }

}
