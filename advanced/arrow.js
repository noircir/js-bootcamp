const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(9))

const people = [
    {
        name: 'Nellie',
        age: 25
    }, {
        name: 'Dmitri',
        age: 45
    }, {
        name: 'Sigourney',
        age: 22
    }
]

const under30long = people.filter(function (person) {
    return person.age < 30
})

const under30 = people.filter((person) => person.age < 30)

const age22 = people.find((person) => person.age === 22)

console.log(age22.name)