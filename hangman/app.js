

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('new york you', 5)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

// Listen for keypresses
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    // console.log(game1.status)
})

// The argument of getPuzzle is the function that console-logs its own argument (the result)
getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

// const puzzle = getPuzzleSync()
// console.log(puzzle)

console.log('Do something else')

// const countryCode = "US"
// const request2 = new XMLHttpRequest()
// request2.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         // filter will return an array with one element; find returns an object
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('Unable to fetch data')
//     }
// })

// request2.open('GET', 'http://restcountries.eu/rest/v2/all')
// request2.send()

