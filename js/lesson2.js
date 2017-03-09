/* TIMEOUT */
// function timeoutFunc() {
//     alert('Привет');
// }

// setTimeout(timeoutFunc, 5000);


// // НИКОГДА не делайте такого
// setTimeout('alert("Привет")', 5000)




// /*TIMEOUT с передачей параметров*/
// function func(w1, w2, w3) {
//     alert(w1 + '  ' + w2 + ' ' + w3);
// }

// setTimeout(func, 2000, "Hello", "World", "plus");



// /* TIMEOUT c анонимной функцией*/
// var timerId = setTimeout(function() {
//     alert('Callback')
// }, 2000);

// // /*Очистка timeout*/
// clearTimeout(timerId);


// /*INTERVAL */
// var intervaltimerId = setInterval(function() {
//     console.log("тик " + " так");
// }, 1000);


// setTimeout(function() {
//     clearInterval(intervaltimerId);
//     alert('стоп');
// }, 5000);

// /* Использование setTimeout вместо setInterval*/
// var recurciveTimeout = setTimeout(function testFn() {
//     console.log("тик " + " так");
//     timerId = setTimeout(testFn, 1000);
// }, 1000);
// /*
// Важный момент при работе с памятью
// setTimeout - память очистится после исполнения функции
// setInterval - память очистится после clearInterval
// */


// /*Работа со строками*/

// var s = "text";
// var s2 = 'text';
// var s3 = String('створюємо строку через String');
// var s4 = new String('створюємо строку через String');

// console.log("Обьединение" + "Строк");

// var s = "сімнадцять";
// s = s[0] + s[1] + s[2] + " !"; // "сім !"
// console.log(s);

// var testStr = "    Camel|Case|String  ";
// console.log(testStr.toLowerCase());
// console.log(testStr.trim());
// console.log(testStr.length);
// console.log(testStr.indexOf('C'));
// console.log(testStr.trim().split("|"));

// var s_prim = 'foo';
// var s_obj = new String(s_prim);

// console.log(typeof s_prim); // выведет 'string'
// console.log(typeof s_obj); // выведет 'object'



// Look for "Hello"
// var str = "Hello world!";
// var patt = /Hello/g;
// var result = patt.test(str);

// [a-z]

// ([A-Z])\w+



// // for(var i=0; i<10; i++) {
// //   setTimeout(function() {
// //     alert(i);
// //   }, 100);
// // }

// var statement = 0;
// var timeoutvar;
// var el = document.getElementById('element');
// el.onclick = function(event) {
//     event.preventDefault();
//     if (!statement) {
//         statement = 1;
//     } else {
//         statement = 0;
//     }
//     startCounter(2000);
// }

// function startCounter(ms) {
//     timeoutvar = setTimeout(function fun() {
//         if (statement) {
//             var d = new Date();
//             var n = d.getTime();
//             console.log(n);
//             console.log(statement);
//             timerId = setTimeout(fun, ms);
//         }
//     }, ms)
// }


// var btn = document.getElementById('element');
// var inp1 = document.getElementById('firstInput');
// var inp2 = document.getElementById('secondInput');
// var timeout;
// btn.onclick = function(e) {
//     e.preventDefault();
//     var str = inp1.value;
//     fillInput(str.length, str);
//     // var partLength = Math.ceil(str.length);
//     // for (var i = 0; i <= str.length - 1; i++) {
//     //     setTimeout(function(i) {
//     //         console.log(i)
//     //     }, 100)
//     //     var letter = str[i];
//     // }

// }

// function fillInput(lng, str) {
//     for (var i = 0; i <= lng; i++) {
//      (function(e) {
//             setTimeout(function() {
//                         console.log(str[e]);
//         }, 2000);
//     })(i);

//         // var letter = str[i];
//     }
// }
