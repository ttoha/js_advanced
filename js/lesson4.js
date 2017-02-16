"use strict"

// Полиморфизм - возможность обьектов с одинаковой спецификацией иметь разную реализацию
// Базовый класс (функция конструктор)
function Animal(name, walkSpeed) {

    this.name = name;
    this.walkSpeed = walkSpeed;
    this.showInfo = function() {
        console.log("Эта животное " + this.name + " передвигается со скоростью " + this.walkSpeed);
    };
};

// ---- класи наследники ----

function Bird(name, walkSpeed) {
    Animal.call(this);
    var privateVar = 'ololo';
    this.name = name;
    this.walkSpeed = walkSpeed;
};

function Predator(name, walkSpeed) {
    Animal.call(this);
    this.name = name;
    this.walkSpeed = walkSpeed;
    this.showInfo = function() {
        console.log(this.name + " это хищник");
    };
};


var bird = new Bird("Owl", 50);
var wolf = new Predator("Wolf", 70);

bird.showInfo();
wolf.showInfo();
console.log(bird.privateVar)

alert(bird instanceof Bird);


// function Machine() {
//     var enabled = false;

//     this.enable = function() {
//         enabled = true;
//         console.log('enabled');
//     };

//     this.disable = function() {
//         enabled = false;
//         console.log('disabled');
//     };
// }

// function CoffeeMachine(power) {
//     Machine.call(this)
//     var waterAmount = 0;
//     // var WATER_HEAT_CAPACITY = 4200;
//     // расчёт времени для кипячения
//     function getBoilTime() {
//         return 1000;
//         // return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }

//     // что делать по окончании процесса
//     function onReady() {
//         alert('Кофе готово!');
//     }

//     this.run = function() {
//         // setTimeout - встроенная функция,
//         // она запустит onReady через getBoilTime() миллисекунд
//         setTimeout(onReady, getBoilTime());
//     };
// }

// var coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 200;

// coffeeMachine.run();
