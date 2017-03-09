var player = new Entities.Player({
    name: 'player1',
    info: 'ssdfsdfsdf',
    age: 22,
    playRate: 100
});
var player2 = new Entities.Player({
    name: 'player2',
    info: 'azazaza',
    age: 111,
    playRate: 7
});


for (var i = 4; i >= 0; i--) {
    player.attachCharacter(new Entities.Character({
        name: 'Character' + i,
        skills: [{
            name: 'Fireball',
            dmg: getRandom(20, 80)
        }, {
            name: 'I call my mother',
            dmg: getRandom(200, 290)
        }, {
            name: 'Critical',
            dmg: getRandom(40, 90)
        }, {
            name: 'Arcane Bolt',
            dmg: getRandom(40, 90)
        }, {
            name: 'Adaptive Strike',
            dmg: getRandom(40, 90)
        }],
        health: getRandom(1000, 1400),
        money: getRandom(5000, 6000),
        lvl: getRandom(10, 12),
    }))
}

for (var i = 4; i >= 0; i--) {
    player2.attachCharacter(new Entities.Character({
        name: 'Character' + i,
        skills: [{
            name: 'Fireball',
            dmg: getRandom(20, 80)
        }, {
            name: 'I call my mother',
            dmg: getRandom(200, 290)
        }, {
            name: 'Critical',
            dmg: getRandom(40, 90)
        }, {
            name: 'Arcane Bolt',
            dmg: getRandom(40, 90)
        }, {
            name: 'Adaptive Strike',
            dmg: getRandom(40, 90)
        }],
        health: getRandom(1000, 1400),
        money: getRandom(5000, 6000),
        lvl: getRandom(10, 12),
    }))
}
