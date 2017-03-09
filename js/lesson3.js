// click – происходит, когда кликнули на элемент левой кнопкой мыши
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
// mouseover – возникает, когда на элемент наводится мышь
// mousedown и mouseup – когда кнопку мыши нажали или отжали
// mousemove – при движении мыши


// submit– посетитель отправил форму < form >
// focus– посетитель фокусируется на элементе, например нажимает на < input >

// keydown – когда посетитель нажимает клавишу
// keyup – когда посетитель отпускает клавишу


var testBtn = document.getElementById('ololo');
var parent = document.getElementById('herocol');

function testBtnFunction(e) {
    alert(this.innerHTML)
}

function secondFunction(e) {
    console.log(e);
    e.preventDefault(); // отмена события по умолчанию
    e.stopPropagation(); // отмена всплытия события на родительскй обработчик
    e.stopImmediatePropagation(); // отмена всплытия события на родительскй обработчик
    alert('secondFunction')
        // return false;
}




// testBtn.onclick = function(e) {
//         alert(this.innerHTML);
//     }
// testBtn.onclick = testBtnFunction;


// testBtn.addEventListener("click", function() {
//     alert(this.innerHTML)
// });

/* Не сработает*/
// testBtn.removeEventListener("click", function() {
//     alert(this.innerHTML)
// });

// testBtn.addEventListener("click", secondFunction);

/* Cработает*/
// testBtn.addEventListener("click", testBtnFunction);
// testBtn.removeEventListener("click", testBtnFunction);




/*TEST propaganation*/
// testBtn.addEventListener("click", testBtnFunction);
// parent.addEventListener("click", function() {
//     this.style.display = 'none';
// });




/*Для Ie8*/
// function handler() {
//     alert('Обработчик');
// }
// button.attachEvent("onclick", handler) // Назначение обработчика
// button.detachEvent("onclick", handler) // Удаление обработчика
