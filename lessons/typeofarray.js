let friends = ['John', 'Peter', 'Reyes', 'Mark']
console.log(Array.isArray(friends))

let enemies = [
    {
        name: ['Gerry', 'Neymar'],
        gender: 'male',
        age: 32,
    },
    {
        name: 'Bruno',
        gender: 'male',
        age: 28
    }
]

console.log(typeof enemies[0].name)
console.log(Array.isArray(enemies[0]))
console.log(Array.isArray(enemies[0].name))