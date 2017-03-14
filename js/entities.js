var Entities = {
    Player: function(data) {
        Entities.Base.apply(this, arguments);
        this.info = data.info;
        this.age = data.age;
        this.playRate = data.playRate;
        this.characters = [];
    },
    Character: function(data) {
        Entities.Base.apply(this, arguments);
        this.defaultAtack = data.defaultAtack;
        this.manaRegen = data.manaRegen;
        this.skills = data.skills;
        this.maxHP = data.maxHP;
        this.maxMP = data.maxMP;
        this.health = data.health;
        this.mana = data.mana;
        this.money = data.money;
        this.lvl = data.lvl;

    },
    Base: function(data) {
        this.id = getRandom(1, 1000);
        this.name = data.name;
        var date = new Date();
        this.createdAt = date;
        this.updatedAt = date;
    },
};

Entities.Player.prototype = Object.create(Entities.Base.prototype)
Entities.Player.constructor = Entities.Player;
Entities.Character.prototype = Object.create(Entities.Base.prototype)
Entities.Character.constructor = Entities.Character;



Entities.Player.prototype.attachCharacter = function(character) {
    if (!(character instanceof Entities.Character)) {
        throw "Can't set character";
    }
    this.characters.push(character);
}
Entities.Player.prototype.getRandomCharacter = function() {
    return this.characters[getRandom(0, this.characters.length - 1)];
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

Entities.Player.prototype.kill = function(id) {
    var chars = this.characters;
    for (var key in chars) {
        if (chars[key].id != id) continue;
        this.characters.splice(key, 1);
    }
    return this;
}



Entities.Character.prototype.defend = function(attack) {
    var damaged = Math.round(attack.dmg * Math.random());
    var blocked = attack.dmg - damaged;
    this.health -= damaged;
    LOG.add(this.name + ' block: <strong style="color:green">' + blocked + '</strong> dmg, and have <strong style="color:red">' + this.health + ' health</strong> and <span style="color:blue">' + this.mana + ' mana</span>')
    if (this.health < 0) {
        throw 'Character: ' + this.name + ' dead';
    }
}


Entities.Character.prototype.attack = function(character) {
    if (!(character instanceof Entities.Character)) {
        throw "Can't attack this character";
    }

//    var attackMethod = function(){
//        var newSkills = [];
//        for(key in this.skills){
//            if(this.mana >= this.skills[key].manaCost){
//                newSkills.push(this.skills[key])
//            }
//        }
//        if(newSkills.length > 0){
//           return newSkills[getRandom(0, newSkills.length - 1)];
//        } else {
//           return this.defaultAtack
//        }
//    }


    console.log(this);
    var attackMethod;
    var newSkills = [];

    for(key in this.skills){
        if(this.mana >= this.skills[key].manaCost){
            newSkills.push(this.skills[key])
        }
    }
    if(newSkills.length > 0){
       attackMethod = newSkills[getRandom(0, newSkills.length - 1)];
    } else {
       attackMethod = this.defaultAtack[getRandom(0, this.defaultAtack.length - 1)];
    }

    this.mana = this.mana - attackMethod.manaCost + this.manaRegen;
    LOG.add(this.name + ' used skill: <strong>' + attackMethod.name + '</strong> for <span style="color:blue">' + attackMethod.manaCost + ' mana</span> from <span style="color:blue">' + this.mana + '</span>, with damage: <strong style="color:red">' + attackMethod.dmg + '</strong> to attack:' + character.name);
    character.defend(attackMethod);
}
