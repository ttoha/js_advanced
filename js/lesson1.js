/* ----Пространство имен ----*/
/* --- Глобальная переменная---*/
var a = 10;




// var test1 = function() {
//     console.log('test1');
// };


// function test2() {
//     console.log('test2')
// }






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





// var testfun = {
//     points: function(data) {
//         return 4;
//     },
//     lol: function() {
//         return this.points() + 1;
//     }
// };
// appSpace.anotherMethod = function() {
//     console.log('ololo');
// }
/* Вывод глобальной переменной */
// console.log(a);




/* Работа с приватными переменными */
var app = function() {
    // Приватная переменная
    var member = 3;
    var firstname = "John";
    var lastname = "DOe";

    function fullname() {
        return firstname + " " + lastname;
    }

    // Приватная функция
    function _foo() {}

    return {
        getMember: function() {
            return member;
        },
        getName: fullname,
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
    // return {
    //     azaza: 5,
    // }

}());


var obj = {
    key: "value",
    key2: "value",
    key3: "value",
    key4: "value",
    key5: "value",
    key6: "value",
    key7: "value",

}

// myobj.getName(); // "chicken"



/* --- Работа с document --- */


var elem = document.getElementById('exampleEmailInput');
elem.value = "azazazaza";

var section = document.getElementsByClassName('hero');
// var button = 10;
// for (var i = section.length - 1; i >= 0; i--) {
//     button = section[i].getElementsByTagName('a');
// }
var button = section[0].getElementsByTagName('a');

// var section2 = document.querySelector('.hero');
// var section2 = document.querySelectorAll('.hero');

// button[0].innerHTML = "changed";
// var elems = section[0].getElementsByTagName('*')
// console.log(elems);

// document.body.id = 5234
// alert(document.body.getAttribute('id'))
/* Работа с Атрибутами через имя*/
// document.body.setAttribute('abc', 'ololo');
// document.body.setAttribute('ABC', '=(');
// alert(document.body.getAttribute('ABC')) //  стало =(


/* Работа с Атрибутами через свойство*/
// document.body.abc = 1;
// document.body.ABC = 5;
// alert(document.body.abc)
// alert(document.body.ABC)


/* --- Работа с location --- */

function setLocation(loc) {
    return window.location.hash = loc;
}


// document.readyState(function() {
//     console.log('azaza');
// })
// console.log('olololo');







// $('a').on('click', function(e) {
//     e.preventDefault();
// data.getData($(this).attr('href'));
//     window.history.pushState($(this).attr('href'));
// })

// window.location = 'cart';



var myobject = [{
    "name": "Name 1",
    "checked": false,
    "value": "azaza",
    "attr": {
        "data-type": 'food',
        "data-src": '/sdfsd/dfhghjgh/image.jpg'
    },
}, {
    "name": "Name 2",
    "checked": false,
    "attr": {},
}, {
    "name": "Name 3",
    "checked": true,
    "attr": {},
}, {
    "name": "Name 4",
    "checked": false,
    "attr": {},
}, {
    "name": "Name 5",
    "checked": true,
    "attr": {},
}, {
    "name": "Name 6",
    "checked": false,
    "attr": {},
}];

document.write('<ul id="inputsList"></ul>');

//Поиск елемента
var elem = document.getElementById('inputsList');
var str = '';
// Циклом генерируем список
for (var key in myobject) {
    var item = myobject[key];
    var attrs = "";
    for (var keyAttr in item.attr) {
        attrs += keyAttr + "='" + item.attr[keyAttr] + "'";
    }
    console.log(item.attr['data-type']);
    if (item.checked) {
        str += "<li><label><input type='checkbox' value='" + item.value + "' checked " + attrs + ">" + item.name + "</label></li>"
    } else {
        str += "<li><label><input type='checkbox' value='" + item.value + "' " + attrs + ">" + item.name + "</label></li>"
    }
}

// Вставка списка в DOM дерево
elem.innerHTML = str;
