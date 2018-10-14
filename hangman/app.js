const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

// Listen for keypresses
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
// Defining callback function here 
// getPuzzle('2', (error, puzzle) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(puzzle)
//     }
// })

// getPuzzle with Promise
// getPuzzle('3').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// //------------------------------------------------------
// // This was the synchronous way of calling a function
// // const puzzle = getPuzzle()
// // console.log(puzzle)
// //------------------------------------------------------

// getCountry('fr').then((country) => {
//     console.log(country)
// }, (err) => {
//     console.log(err)
// })

getCountry('dz').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// console.log('Do something else')


// Using Fetch API
// Improves XMLHttpRequest by removing the need to track readystatechange

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         // The json() method of the Body mixin takes a Response stream 
//         // and reads it to completion. It returns a promise that resolves 
//         // with the result of parsing the body text as JSON.
//         return response.json()
//     } else {
//         // will cause the catch statement to catch this error
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((err) => {
//     console.log(err)
// })

getLocation().then((location) => {
    console.log(`You are located in the city of ${location.city}, region of ${location.region}, country: ${location.country}.`)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// Combine the two: getLocation and getCountry to get the full name of the country.
// Promise chaining.

// getLocation().then((location) => {
//     return location.country
// }).then((countryCode) => {
//     return getCountry(countryCode)
// }).then((fullCountryName) => {
//     console.log(fullCountryName)
// }).catch((e) => {
//     console.log(`Error: ${e}`)
// })

// ^^ the same as above but with async/await

// getCurrentCountry().then((country) => {
//     console.log(`You live in ${country.name}`)
// }).catch((e) => {
//     console.log(`Error: ${e}`)
// })

// https://api.darksky.net/forecast/8728b0a3da597a2260792a25873b1420/37.8267,-122.4233

// getLocation().then((location) => {
//     return location.loc
// }).then((location) => { 
//     return getWeather(location)
// }).then((weather) => {
//     console.log(weather.currently.temperature)
// }).catch((e) => {
//     console.log(`Error: ${e}`)
// })