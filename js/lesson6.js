// try {
//     console.log('start');
//     console.log('finish');
// } catch (e) {
//     console.log('Блок не должен будет вызваться');
// }
// try {
//     console.log('start');
//     ololo(); // ошибка!
//     console.log('finish');
// } catch (e) {
//     console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
// }

// console.log("Выполнение кода не остановлено");

/*Нельзя обработать исключение которое выброшено внутри таймаута*/
/*Для того чтоб обработать try{}catch(){} должны быть внутри таймаута*/
// setTimeout(function() {
//     try {
//         throw new Error(); // вылетит в консоль
//     } catch (e) {
//         console.log(e);
//     }
// }, 4000);

// function checkSome() {
//     try {
//         var a = 1;
//         var b = 2;
//         if (a != b) {
//             throw new Error('global');
//             // throw new SyntaxError("Переменная А не равна b");
//         }
//     } catch (e) {
//         if (e.name == "SyntaxError") {
//             alert("Извините, в данных ошибка: " + e.message);
//         } else {
//             throw e;
//         }
//     }
// }


// try {
//     checkSome()
// } catch (e) {
//     console.log(e.name + ': ' + e.message);
// }
// try {
//     alert('try');
//     if (confirm('Нажми чтоб ошибиться')) BAD_CODE();
// } catch (e) {
//     alert('catch');
// } finally {
//     alert('finally');
// }


/*Никогда так не делаем*/
// eval('alert(2+3)');

// // 1. Создаём новый объект XMLHttpRequest
// var xhr = new XMLHttpRequest();

// // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// xhr.open('GET', 'https://httpbin.org/get', false);

// // 3. Отсылаем запрос
// xhr.send();
// //Для отправки данных
// // xhr.send(body)

// // 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//     // обработать ошибку
//     alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
// } else {
//     // вывести результат
//     alert(xhr.responseText); // responseText -- текст ответа.
// }
function lal(url, param) {
    var data;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) throw new Error('Bad status code: ' + xhr.status);
        try {
            data = JSON.parse(xhr.responseText);
            if (!data[param]) {
                throw new Error('Not valid response data, missing: ' + param);
            }
        } catch (e) {
            throw e;
        }
        console.log(data)
    }
}
try {
    lal('https://httpbin.org/get', 'url')
} catch (e) {
    console.log(e.name + ': ' + e.message);
}
