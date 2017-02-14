function gID(id) {
    return document.getElementById(id);
}

var mainJson  = JSON.parse(users);

var loginForm = gID("loginForm");
var login = gID("login");
var pass = gID("pass");
var loginbtn = gID("loginbtn");

var timeoutForm = gID("timeoutForm");
var in1 = gID("in1");
var in2 = gID("in2");
var btn = gID("btn");



loginbtn.onclick = function (event) {
    event.preventDefault();

    var loginVal = login.value;
    var passVal = pass.value;

    if(loginVal && passVal) {
        validate();
    } else {
        errorFunc('empty');
    }

    function validate() {
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(reg.test(loginVal)){
            loginFunc();
        } else {
            errorFunc('notValid');
        }
    }

    function loginFunc(){
        var error = false;
        for(var i=0; i<mainJson.length; i++){
            if(mainJson[i].login == login.value && mainJson[i].password == pass.value){
                loginForm.setAttribute("style", "display:none");
                timeoutForm.setAttribute("style", "display:block");
                break;
            } else {
                error = true;
            }
        }
        if (error) {
            errorFunc('notLogin')
        }
    }

    function errorFunc(check){
        var errorBlock = document.createElement('p');

        if (check == 'notLogin'){
            errorBlock.innerHTML = 'логин или пароль не совпадают!';
        } else if (check == 'notValid') {
            errorBlock.innerHTML = 'example@example.com';
        } else if (check == 'empty') {
            errorBlock.innerHTML = 'введите логин и пароль';
        }
        errorBlock.setAttribute("style", "color:red");
        setTimeout(function () {
            loginForm.appendChild(errorBlock);
        }, 1000);
    }
}

btn.onclick = function (event) {
    event.preventDefault();
    btn.setAttribute("disabled", "disabled");

    var val1 = in1.value;
    var val2 = '';
    var leng = parseFloat(val1.length / 2);
    var i = 0;

    timeout();

    function timeout() {
        setTimeout(function () {
            val2 = val2 + val1[i];
            in2.value = val2;
            i++;
            if (i < leng) {
                timeout();
            } else {
                btn.removeAttribute("disabled");
            }
        }, 1000);
    }
}
