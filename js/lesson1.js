/* ----Пространство имен ----*/
/* --- Глобальная переменная---*/
var a = 10;

/* --- Глобальная функция---*/
function testAlert() {
    /*приватная переменная*/
    var a = 55;
    console.log(a);
    alert('Hello i\'m test');
    return true;
}


var appSpace = {
    show: function(data) {
        alert(data)
    }
};

/* Вывод глобальной переменной */
// console.log(a);




/* Работа с приватными переменными */
var app = function() {
    // Приватная переменная
    var member = 3;

    // Приватная функция
    function _foo() {}

    return {
        getMember: function() {
            return member;
        },
    }
}();


var myobj; // это будет объект
var module = (function() {
    // частные члены
    var name = "chicken";
    // реализация общедоступных членов

    // обратите внимание на отсутствие инструкции 'var'
    myobj = {
        // привилегированный метод
        getName: function() {
            return name;
        }
    };


    // возвращение модуля
    return {
        azaza: 5,
    }

}());

// myobj.getName(); // "chicken"





/* --- Работа с document --- */


var elem = document.getElementById('exampleEmailInput');
elem.value = "azazazaza";

var section = document.getElementsByClassName('hero');
var button = section[0].getElementsByTagName('a');


var section2 = document.querySelector('.hero');
// var section2 = document.querySelectorAll('.hero');

button[0].innerHTML = "changed";
// console.log(section2);
// var elems = div.getElementsByTagName('*')


// document.body.id = 5
// alert(document.body.getAttribute('id'))

/* Работа с Атрибутами через имя*/
document.body.setAttribute('abc', 'ololo');
document.body.setAttribute('ABC', '=(');
// alert(document.body.getAttribute('abc')) //  стало =(



/* Работа с Атрибутами через свойство*/
document.body.abc = 1;
document.body.ABC = 5;
// alert(document.body.abc)
// alert(document.body.ABC)



/* --- Работа с location --- */

function setLocation(loc) {
    return window.location.hash = loc;
}
