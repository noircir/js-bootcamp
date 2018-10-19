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
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
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

// Adding an item to array without using push or unshift
const citiesCopy = ['Amsterdam', ...cities]
const citiesCopy2 = [...cities, 'Beijin']

console.log(citiesCopy2)