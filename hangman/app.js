const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('My fruit', 5)


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

// Defining callback function here 
// getPuzzle('2', (error, puzzle) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(puzzle)
//     }
// })

// getPuzzle with Promise
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (error) => {
    console.log(`Error: ${error}`)
})

//------------------------------------------------------
// This was the synchronous way of calling a function
// const puzzle = getPuzzle()
// console.log(puzzle)
//------------------------------------------------------

getCountry('fr').then((country) => {
    console.log(country)
}, (err) => {
    console.log(err)
})

// console.log('Do something else')
