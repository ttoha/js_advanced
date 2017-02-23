var charId = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log()

var Entities = {
    Player: function(data){
        Entities.Base.call(this, data);
        this.info = data.info;
        this.age = data.age;
        this.playRate = data.playRate;
        this.characters = [];
    },
    Character: function(data){
        Entities.Base.call(this, data);
        this.skills = data.skils;
        this.money = data.money;
        this.lvl = data.lvl;
    },
    Base: function(data){
        this.id = charId;
        this.name = data.name;
        this.createdAt = new Date;
        this.updatedAt = new Date;
    }
}

var player = new Entities.Player({
    name:"name",
    info:"man",
    age:20,
    playRate:100
})

var char = new Entities.Character({
    name:"name",
    info:"man",
    age:20,
    playRate:100
})

Entities.Player.prototype = Object.create(Entities.Base.prototype)
Entities.Player.constructor = Entities.Player;

Entities.Character.prototype = Object.create(Entities.Base.prototype)
Entities.Character.constructor = Entities.Character;

Entities.Player.prototype.addCharacter = function(character){
    this.characters.push(character)
}

