const team = {
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 54
        },
        {
            firstName: 'Leo',
            lastName: 'Ho',
            age: 88
        },
        {
            firstName: 'John',
            lastName: 'Willy',
            age: 102
        }
    ],
    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'WhatIsThis',
            teamPoints: 20,
            opponentPoints: 60
        },
        {
            opponent: 'Whatever',
            teamPoints: 30,
            opponentPoints: 68
        },
        {
            opponent: 'WhoKnows',
            teamPoints: 69,
            opponentPoints: 100
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let games = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(games);
    }
};

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

for (let item of team._players) {
    console.log(`${item.firstName} ${item.lastName} ${item.age}`)
};

team.addGame('lalala', 60, 50)
team.addGame('blablabla', 69, 69)
team.addGame('lolololol', 100, 102)

for (let item of team.games) {
    console.log(`${item.opponent} ${item.teamPoints} ${item.opponentPoints}`)
};