"use strict"

// Полиморфизм - возможность обьектов с одинаковой спецификацией иметь разную реализацию
// Базовый класс (функция конструктор)
// function Animal(name, walkSpeed) {
//     this.name = name;
//     this.walkSpeed = walkSpeed;
//     this.showInfo = function() {
//         console.log("Эта животное " + this.name + " передвигается со скоростью " + this.walkSpeed);
//     };
// };

// console.log(animal);
// animal.showInfo();
// var animal = new Animal('Bird', 500);

// ---- класи наследники ----

// function Bird(name, walkSpeed) {
//     Animal.call(this);
//     var privateVar = 'ololo';
//     this.name = name;
//     this.walkSpeed = walkSpeed;
//     this.showInfo = function() {
//         return privateVar;
//     }
//     this.setPrivate = function(value) {
//         privateVar = value;
//         console.log(privateVar);
//         return this;
//     }
// };

// function Predator(name, walkSpeed) {
//     Animal.call(this);
//     this.name = name;
//     this.walkSpeed = walkSpeed;
//     this.showInfo = function() {
//         console.log(this.name + " это хищник");
//     };
// };


// console.log(bird);
// var owl = new Bird("Owl", 50);
// console.log(owl.showInfo());
// var wolf = new Predator("Wolf", 70);

// wolf.showInfo();
// console.log(owl.privateVar)

// console.log(owl);


function Machine() {
    var enabled = false;

    this.enable = function() {
        enabled = true;
        console.log('enabled');
    };

    this.isEnabled = function() {
        return enabled;
    }
    this.disable = function() {
        enabled = false;
        console.log('disabled');
    };
}



function CoffeeMachine(power) {
    Machine.call(this)
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    // расчёт времени для кипячения
    // var self = this;

    function getBoilTime() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.fillWater = function(amount) {
        if (amount <= 0) {
            alert('Налей воды');
            return;
        }
        waterAmount = amount
        return this;
    }

    // что делать по окончании процесса
    function onReady() {
        alert('Кофе готово!');
        self.disable();
        return this;
    }

    this.run = function() {
        // setTimeout - встроенная функция,
        // она запустит onReady через getBoilTime() миллисекунд
        if (!this.isEnabled()) {
            alert('Включи чайник');
            return false;
        } else if (waterAmount <= 0) {
            alert('Налей воды');
            return false;
        }
        setTimeout(onReady, getBoilTime());
    };
}

var coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 200;

// coffeeMachine.run();

// function Product(params) {
//     this.name = params.name;
//     this.price = params.price;
//     this.stock = params.stock;
//     this.quantity = params.quantity;
// }


// function Car(params) {
//     Product.call(this, params);
//     this.wheel = params.wheel
// }

// var car = new Car({
//     name: 'Lexus',
//     price: 100,
//     stock: true,
//     quantity: 100,
//     wheel: 5
// })
// console.log(car);
