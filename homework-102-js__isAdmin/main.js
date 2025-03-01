const myProfile = {
    name: 'Vladimir',
    age: 16,
    city: 'Ivanovo',
    greet: function(personName) {
        return `Hello ${personName}`;
    }
}


const users = [
    {
        name: 'Kate',
        age: 18,
        isAdmin: true
    },
    {
        name: 'Max',
        age: 22,
        isAdmin: false
    },
    {
        name: 'Alex',
        age: 26,
        isAdmin: false
    },
    {
        name: 'Walter',
        age: 40,
        isAdmin: true
    }
]

let regularUsersCount = 0

for (i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        regularUsersCount++;
    }
}

console.log(regularUsersCount);