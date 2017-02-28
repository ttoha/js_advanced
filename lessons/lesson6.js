// try {
//     console.log('start');
//     ololo(); // ошибка!
//     console.log('finish');
// } catch (e) {
//     console.log(e.fileName);
//     console.log(e.lineNumber);
// }
//
//console.log("Выполнение кода не остановлено");



function req(jsonPath, url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', jsonPath, true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.status != 200) {
            throw new Error();
        } else {
            if (xhr.readyState == 4) {
                var data = JSON.parse(xhr.responseText);
                if(data.url == url) {
                    return data;
                }
            }
        }

    }
}
var data = req('https://httpbin.org/get', 'https://httpbin.org/get');
