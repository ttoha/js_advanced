function gID(id) {
    return document.getElementById(id);
}

var textInp = document.querySelectorAll('.textInp');
var dialog = gID('dialog');

for(key in textInp){
    textInp[key].addEventListener("blur", function(){
        var thisInp = this;
        validate(thisInp);
    });
//    text[key].addEventListener("focus", focusFunction);

}


function validate(thisInp) {
    var atrr = thisInp.getAttribute("type");
    var val = thisInp.value;

    if(atrr=="email"){
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(reg.test(val)){
            success();
        } else {
            error(atrr);
        }
    } else if(atrr=="password") {
        var size = val.length;

        if(size >= 6){
            success();
        } else {
            error(atrr);
        }
    }
}

function error(atrr) {
    var errorMassage;

    if(atrr == "email"){
        errorMassage = "неправильный формат email";
    } else if(atrr == "password") {
        errorMassage = "пароль не может быть менше 6 символов"
    }

    dialog.innerHTML = errorMassage + dialog.innerHTML;
    dialog.setAttribute("open", "open");
    dialog.setAttribute("class", "error");
}

function success() {
    var logVal = gID('login').value;
    var passVal = gID('pass').value;

    dialog.innerHTML = "Поздравляю!!! <br /> Ваш логин: <strong>" +logVal+ "</strong> <br />Ваш пароль: <strong>" +passVal+ "</strong> <br /><br />" + dialog.innerHTMl;
    dialog.setAttribute("open", "open");
    dialog.setAttribute("class", "success");
}
