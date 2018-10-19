// Rest operator

// const calculateAverage = (thing, ...numbers) => {
//     //return (numOne + numTwo) / 2
//     let sum = 0
//     numbers.forEach((num) => sum += num)
//     const average = sum / numbers.length
//     return `The average ${thing} is ${average}`
// }

// console.log(calculateAverage('temperature', 10, 15, 30, 22))

// Create printTeam that takes team name, coach, and players

// Team: Liberty
// Coach: Casey Penn
// Players: Marge, Aiden, Herbert, Sherry

const printTeam = (teamName, coach, ...players) => {
    // console.log(`Team: ${teamName}`)
    // console.log(`Coach: ${coach}`)
    // console.log(`Players: ${players.join(', ')}`)
}

// printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

// What if the data presents itself as an object (with unknown amount of players)
// and we cannot change the function (eg, it comes from an external API).

const team = {
    name: 'Liberty', 
    coach: 'Casey Penn',
    players: ['Dirk', 'Sebastian', 'Sequoia', 'Connor', 'Sibelius', 'Dmitri Wamback']
}

//Spread operator

printTeam(team.name, team.coach, ...team.players)

// Cloning an Array
const cities = ['Barcelona', 'Paris', 'Singapour', 'Tokyo']

// A true clone of the array, changes in one do not reflect on the other.
const citiesCopy = [...cities]

// Adding an item to array without using push or unshift
const citiesCopy1 = ['Amsterdam', ...cities]
const citiesCopy2 = [...cities, 'Beijin']

// console.log(citiesCopy2)

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

// A clone of an object !
let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3  //bedrooms will be overridden (order in object declaration is important)
}

newHouse.yearBuilt = 1985
// console.log(house)
// console.log(newHouse)


const person = {
    name: 'Chuck Todd',
    age: 48
}

const location = {
    city: 'Singapore',
    country: 'Singapore'
}

const overview = {
    ...person,
    ...location
}

// console.log(overview)

//=====================
// Destructuring objects
//=======================

const todo = {
    id: 'aksjfsfa23410243657',
    text: 'Pay the bills',
    completed: false,
    completedAt: 12345678
}

// Destructuring and overriding the name.
// details does not exist on 'todo; setting default value.
// Creating local variable 'otherDetails' 
// while still looking for 'details' on the 'todo' object.

const { text:todoText, completed, details:otherDetails = 'No details provided', ...others } = todo

console.log(`todoText: ${todoText}`)
console.log(`completed: ${completed}`)
console.log(`otherDetails: ${otherDetails}`)
console.log(others)

// Destructuring of arrays

const age = [65, 0, 13]
// const [firstAge, secondAge, , lastAge = 55] = age
const [firstAge, ...otherAges] = age
console.log(firstAge)
console.log(otherAges)
// console.log(perfectAge)

// Destructuring inside function arguments (great tool):
const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}

printTodo(todo)