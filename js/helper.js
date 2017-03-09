function getRandom(min, max) {
    return Math.round(min + (Math.random() * (max - min)))
}



var USERS = [];
var logDiv = document.querySelector('.scrolldiv');


function create_characters(count, player) {
    console.log(player);
    for (var i = count; i >= 0; i--) {
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
}


function create_user(username) {
    var user = new Entities.Player({
        name: username,
        info: username + ': info',
        age: getRandom(15, 30),
        playRate: getRandom(1, 100)
    });
    USERS.push(user);
}



var LOG = {
    add: function(log) {
        var str = document.createElement('p');
        str.innerHTML = log;
        logDiv.appendChild(str);
    },
    clear: function() {
        logDiv.innerHTML = '';
    }
}

var TEMPLATE = {
    remove: function(seletor) {
        document.querySelector('.createCharactersBlock').innerHTML = '';
        document.querySelector('.createFightBlock').innerHTML = '';
        console.log('removing');
    },
    createCharactersBlock: function() {
        var userhasNoChars = 0;

        if (USERS.length < 1) {
            return;
        }
        for (entity of USERS) {
            if (entity.characters.length < 1) {
                userhasNoChars++;
            }
        }
        if (userhasNoChars < 1) {

            console.log('disable creating chars');
            return;
        }

        var tpl = '<div class="panel panel-default">\
              <div class="panel-heading">Create Characters block</div>\
              <div class="panel-body">';
        tpl += this.createSelect('playerchars', USERS, false);
        tpl += '<input type="text" name="countchars" id="countchars">\
                <button class="btn btn-danger" id="createCharacter">Create Characters</button>\
              </div>\
            </div>';
        document.querySelector('.createCharactersBlock').innerHTML = tpl;

        document.querySelector('#createCharacter').onclick = function(e) {
            var reg = /([0-9])\d+/;

            var user_id = document.querySelector('#playerchars').value;
            var count = document.querySelector('#countchars').value;
            var number = reg.test(count);
            try {
                if (!number){
                    throw new Error("Только цифры")
                }
                var filtered = USERS.filter(function(user) {
                    return user.id == user_id;
                });
                create_characters(count - 1, filtered[0]);
                TEMPLATE.render();
            } catch(e) {
                TEMPLATE.popup(e.message)
            }

        }

    },
    popup: function(message){
        var dialog = document.querySelector('#dialog');
        var dialogClose = '\
            <br /><br />\
            <button id="dialogClose">close</button>';


        dialog.setAttribute('open', '');
        dialog.innerHTML = message + dialogClose;
        var dialogCloseButton = document.querySelector('#dialogClose');

        dialogCloseButton.onclick = function() {
            console.log (dialogCloseButton);
            dialog.removeAttribute('open');
            dialog.innerHTML = '';
        }

    },
    createUsersBlock: function() {
        var tpl = '\
            <div class="panel panel-default">\
              <div class="panel-heading">Create Users</div>\
              <div class="panel-body">\
                <input type="text" name="username" id="usernameInput">\
                <button class="btn btn-danger createUserBtn">Create user</button>\
              </div>\
            </div>';
        document.querySelector('.createUserBlock').innerHTML = tpl;

        document.querySelector('.createUserBtn').onclick = function(e) {
            var username = document.querySelector('#usernameInput').value;
            var checkUser = USERS.filter(function(user){
                if (user.name == username) {
                    return true;
                }
                return false
            });
            try {
                if (username.length < 3){
                    throw new Error("Имя пользователя должно иметь не меньше 3 символов")
                } else if (checkUser.length > 0) {
                    throw new Error("Пользователь " +username+ " уже сушествует")
                }
                create_user(username);
                TEMPLATE.render();
            } catch(e) {
                TEMPLATE.popup(e.message)
            }


        }
    },
    createFightBlock: function() {
        var userhasChars = 0;

        if (!USERS.length) {
            return;
        }
        for (entity of USERS) {
            if (entity.characters.length > 0) {
                userhasChars++;
            }
        }

        console.log(this.createSelect('firstplayer', USERS, true));

        var tpl = '<div class="panel panel-default">\
                        <div class="panel-heading">Fight block</div>\
                        <div class="panel-body">\
                        <div class="row">\
                        <div class="col-md-12">';
        tpl += this.createSelect('firstplayer', USERS, true);
        tpl += this.createSelect('secondplayer', USERS, true);
        tpl += '</div>\
                        </div>\
                        <div class="row">\
                        <div class="col-md-12">';
        if (userhasChars > 1) {
            tpl += '<button class="btn btn-danger" id="fightBth">Fight</button>'
        }
        tpl += '</div>\
                        </div>\
                        </div>\
                        </div>';
        document.querySelector('.createFightBlock').innerHTML = tpl;
        if (userhasChars > 1) {
            document.querySelector('#fightBth').onclick = function(e) {
                var p1_id = document.querySelector('#firstplayer').value;
                var p2_id = document.querySelector('#secondplayer').value;
                var firstFilter = USERS.filter(function(user) {
                    return user.id == p1_id;
                });
                var secondFilter = USERS.filter(function(user) {
                    return user.id == p2_id;
                });
                var p1 = firstFilter[0];
                var p2 = secondFilter[0];
                if (p1.id == p2.id) {
                    console.log('atata');
                    return;
                }
                LOG.clear();

                fight(p1, p2)

            }
        }
    },
    createLogBlock: function() {
        // создать блок для вывода логов
        console.log('create log block');
    },
    render: function() {
        console.log('Start Rendering');
        // Удаляем блоки которые перерисуем
        this.remove('selector');

        // Перерисовуем блоки
        this.createCharactersBlock();
        this.createFightBlock();
        console.log('Finish rendering');
    },
    createSelect: function(name, data, hasChars) {
        var html = '<select id="' + name + '">';
        for (entity of data) {

            if (!hasChars && entity.characters.length <= 0) {
                html += '<option value="' + entity.id + '">' + entity.name + '</option>';
            } else if (hasChars && entity.characters.length >= 1) {
                html += '<option value="' + entity.id + '">' + entity.name + '</option>';
            }
        }
        html += '<select>';
        return html;
    },
    init: function() {
        // Начальная инициализация приложения
        this.createUsersBlock();
        this.createLogBlock();
    },
}
