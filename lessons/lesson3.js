function gID(id) {
    return document.getElementById(id);
}

var login = gID("login");

var massage = gID("massage");


function validate() {
    var loginVal = login.value;

    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reg.test(loginVal);
}
function check(validate) {
    if(validate){
        massage.innerHTML = "ваш логин правильнный";
        massage.innerHTML += "<span id='close'>X</span>";
        massage.style.color = 'green';
        massage.style.display = 'block';
    } else {
        massage.innerHTML = "ваш логин неправильнный";
        massage.innerHTML += "<span id='close'>X</span>";
        massage.style.color = 'red';
        massage.style.display = 'block';
    }
}

function remove(){
    massage.style.display = 'none';
}

function init(){
    check(validate());
    var close = gID('close');

    console.log(close);

    close.addEventListener("click", remove)
}

login.addEventListener("blur", init)
login.addEventListener("focus", remove)
