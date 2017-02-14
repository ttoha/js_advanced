/* TIMEOUT */
function timeoutFunc() {
    alert('Привет');
}

setTimeout(timeoutFunc, 1000);


// НИКОГДА не делайте такого
setTimeout('foo(1,2, 3)', 1000)




/*TIMEOUT с передачей параметров*/
function func(w1, w2) {
    alert(w1 + '  ' + w2);
}

setTimeout(func, 1000, "Hello", "World");



/* TIMEOUT c анонимной функцией*/
var timerId = setTimeout(function() {
    alert('Callback')
}, 1000);

/*Очистка timeout*/
clearTimeout(timerId);


/*INTERVAL */
var intervaltimerId = setInterval(function() {
    console.log("тик " + " так");
}, 1000);


setTimeout(function() {
    clearInterval(intervaltimerId);
    alert('стоп');
}, 5000);

/* Использование setTimeout вместо setInterval*/
var recurciveTimeout = setTimeout(function testFn() {
    console.log("тик " + " так");
    timerId = setTimeout(testFn, 1000);
}, 1000);


/*
Важный момент при работе с памятью
setTimeout - память очистится после исполнения функции
setInterval - память очистится после clearInterval
*/


/*Работа со строками*/

var s = "text";
var s2 = 'text 2';
var s3 = String('створюємо строку через String');
var s4 = new String('створюємо строку через String');

console.log("Обьединение" + "Строк");

var s = "сімнадцять";
s = s[0] + s[1] + s[2] + " !"; // "сім !"


var testStr = "    Camel|Case|String  ";
console.log(testStr.toLowerCase());
console.log(testStr.trim());
console.log(testStr.length);
console.log(testStr.indexOf());
console.log(testStr.split("|"));

var s_prim = 'foo';
var s_obj = new String(s_prim);

console.log(typeof s_prim); // выведет 'string'
console.log(typeof s_obj); // выведет 'object'



// Look for "Hello"
var str = "Hello world!";
var patt = /Hello/g;
var result = patt.test(str);

// [a-z]

// ([A-Z])\w+



// for(var i=0; i<10; i++) {
//   setTimeout(function() {
//     alert(i);
//   }, 100);
// }

// var el = document.getElementById('element');
// el.onclick = function(event) {
//     // вывести тип события, элемент и координаты клика
//     alert(event.type + " на " + event.currentTarget);
//     alert(event.clientX + ":" + event.clientY);
//   }
