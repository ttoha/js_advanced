//var globalVar = "globalVar";
//
//function privat(){
//    var privatVar = "privatVar";
//    return privatVar
//}
//
//var obj = {
//    key1: 'value',
//     key2: 'value',
//     key3: 'value'
//}
//
//for (var key in obj){
//    console.log(key)
//    console.log(obj[key])
//}
//
//console.log(globalVar);
//console.log(privat());

//var app = function(){
//    var privateVar = 'privateVar';
//    var privateFunction = function(){
//        return privateVar;
//    }
//    return {
//        publicFun: privateFunction
//    }
//}()


//
//function publicFunction(){
//    var privatVar = "privatVar";
//    var privatFunc = function(){
//        return privatVar
//    }
//    return privatFunc;
//}

//console.log(app)

//function timeout() {
//    console.log('timeout function');
//}
//
//setTimeout(timeout, 3000);
//var timeoutVar = setTimeout(function(){
//    console.log('timeout var');
//}, 3000);
//
//var intervalVar = setInterval(function(){
//    console.log('interval var');
//}, 3000);


//for(var i=0;i<5;i++){
//    (function(i){
//        var timeoutVar2 = setTimeout(function(){
//            console.log('timeout' +i);
//        }, 1000*i);
//     })(i)
//}


function createContent(elClass, str){
    var cl = document.querySelector(elClass);
    cl.innerHTML=str;
}

createContent('.cl1', 'str')

function event(ev, place, func){
    var evPlace = document.querySelectorAll(place);
    for(var key in evPlace) {
        evPlace[key].addEventListener(ev, func);
    }
}
