"use strict"

// function setCookie(name, value, options) {
//     options = options || {};
//     var expires = options.expires;

//     if (typeof expires == "number" && expires) {
//         var d = new Date();
//         d.setTime(d.getTime() + expires * 1000);
//         expires = options.expires = d;
//     }
//     if (expires && expires.toUTCString) {
//         options.expires = expires.toUTCString();
//     }

//     value = encodeURIComponent(value);

//     var updatedCookie = name + "=" + value;
//     // console.log(updatedCookie);

//     for (var propName in options) {
//         updatedCookie += "; " + propName;
//         var propValue = options[propName];
//         if (propValue !== true) {
//             updatedCookie += "=" + propValue;
//         }
//     }
//     // console.log(updatedCookie);

//     document.cookie = updatedCookie;
// }

// function deleteCookie(name) {
//     setCookie(name, "", {
//         expires: -1
//     })
// }

// function getCookie(name) {
//     var matches = document.cookie.match(new RegExp(
//         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
// }
// /* Работа с куками */

// document.cookie = "userName=Vasya";
// setCookie('someKookie', 'someValue', {
//         expires: 100
//     })
// console.log(document.cookie);
// /*Проверка на включенные куки*/
// navigator.cookieEnabled



// /*Прототипы*/
// console.log((1).__proto__) // Number.prototype
// console.log(false.__proto__) // Boolean.prototype
// console.log("string".__proto__) // String.prototype
// console.log((new Date).__proto__) // Object.prototype
// console.log((function() {} /* new Function */ ).__proto__) // Function.prototype
// var arr = [];
// console.log(arr.__proto__) // Function.prototype


// function Animal(name, walkSpeed) {
//     this.name = name;
//     this.walkSpeed = walkSpeed ? walkSpeed : 2;
// };


// Animal.prototype.showInfo = function() {
//     console.log("Эта животное " + this.name + " передвигается со скоростью " + this.walkSpeed);
// };
// Animal.prototype.isJungle = function() {
//     if (this.isJungle()) {
//         console.log('Живет в лесу')
//         return;
//     }
//     console.log('Не живет в лесу')
// }

// Animal.prototype.canRun = function() {
//     if (this.walkSpeed > 10) {
//         return "Yes";
//     }
//     return "No";
// }
// var wolf = new Animal('wolf', 200);

// console.log(wolf.__proto__ === Animal.prototype);
// console.log(wolf);


// var house = new House(1, false);

// var house = {
//     floors: 1,
//     parking: false,
// }

// var Garage = function() {
//     this.cars = 2;
//     this.parking = true;
// }

// Garage.prototype = house;
// Garage.prototype.showInfo = function() {
//     var str = "Здание имеет " + this.floors + " этаж";
//     if (this.parking) {
//         str += " Так же есть парковка на " + this.cars + " машины";
//     } else {
//         str += " Но к сожалению нет парковки";
//     }
//     return str;
// };

// var house1 = new Garage();
// console.log(house1);

var Entities = {
    Player: function(data, sdfsd) {
        Entities.Base.apply(this, arguments);
        this.info = data.info;
        this.age = data.age;
        this.playRate = data.playRate;
        this.characters = [];
    },
    Character: function(data) {
        Entities.Base.apply(this, arguments);
        this.skills = data.skills;
        this.money = data.money;
        this.lvl = data.lvl;
    },
    Base: function(data) {
        this.id = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        this.name = data.name;
        var date = new Date();
        this.createdAt = date;
        this.updatedAt = date;
    },
    // Base: {
    //     id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    //     // name: data.name,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    // }
};
Entities.Player.prototype = Object.create(Entities.Base.prototype)
Entities.Player.constructor = Entities.Player;


Entities.Player.prototype.attachCharacter = function(character) {
    if (!(character instanceof Entities.Character)) {
        throw "Can't set character";
    }
    this.characters.push(character);
}

Entities.Player.prototype.getCharacter = function(id) {
    var chars = this.characters.filter(function(char) {
        return char.id == id;
    });
    if (!chars.length) {
        throw "Can't find character";
    }
    return chars[0];

}

Entities.Character.prototype = Object.create(Entities.Base.prototype)
Entities.Character.constructor = Entities.Character;

var player = new Entities.Player({
    name: 'player1',
    info: 'ssdfsdfsdf',
    age: 22,
    playRate: 100
});


for (var i = 4; i >= 0; i--) {
    player.attachCharacter(new Entities.Character({
        name: 'Character' + i,
        skills: {
            fire: 100,
            stun: 10
        },
        money: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        lvl: Math.floor(Math.random() * (15 - 1 + 1)) + 1,
    }))
}


var player2 = new Entities.Player({
    name: 'player2',
    info: 'azazaza',
    age: 111,
    playRate: 7
});
for (var i = 4; i >= 0; i--) {
    player2.attachCharacter(new Entities.Character({
        name: 'Character' + i,
        skills: {
            fire: 100,
            stun: 10
        },
        money: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        lvl: Math.floor(Math.random() * (15 - 1 + 1)) + 1,
    }))
}


console.log(player);
console.log(player2);
