var Entities = {
    Player: function(data, name){
        Entities.Base.apply(this, arguments);
        this.info = data.info;
        this.age = data.age;
        this.playRate = data.playRate;
        this.characters = [];
    },
    Character: function(data){
        Entities.Base.apply(this, arguments);
        this.skills = data.skils;
        this.money = data.money;
        this.lvl = data.lvl;
    },
    Base: function(data){
        this.id = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        this.name = data.name;
        this.createdAt = new Date;
        this.updatedAt = new Date;
    }
}


Entities.Player.prototype = Object.create(Entities.Base.prototype)
Entities.Player.constructor = Entities.Player;


Entities.Player.prototype.addCharacter = function(character) {
    if (!(character instanceof Entities.Character)) {
        throw "Can't set character";
    }
    this.characters.push(character);
}

function getCharacter(charName){
    var charList = player.characters;
    for(key in charList){
        if(charList[key].name == charName){
            console.log(charList[key]);
            break;
        } else {
            console.log(charName + ' не существует')
        }
    }
}

function getCharacters(){
    console.log(player.characters);
}

function deleteCharacter(charName){
    var charList = player.characters;
    for(key in charList){
        if(charList[key].name == charName){
            console.log(charList[key].name + ' удален');
            charList.splice(key, 1);
            break;
        } else {
            console.log(charName + ' не существует')
        }
    }
}


//player.getCharacter(charName){
//    var charList = this.characters;
//    for(key in charList){
//        if(charList[key].name == charName){
//            console.log(charList[key]);
//            break;
//        } else {
//            console.log(charName + ' не существует')
//        }
//    }
//}


Entities.Character.prototype = Object.create(Entities.Base.prototype)
Entities.Character.constructor = Entities.Character;


var player = new Entities.Player({
    name: 'player1',
    info: 'ssdfsdfsdf',
    age: 22,
    playRate: 100
});


for (var i = 4; i >= 0; i--) {
    player.addCharacter(new Entities.Character({
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
