const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat meow', 3)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = `Remaining guesses left: ${game1.remainingGuesses}`

// Listen for keypresses
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)

    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = `Remaining guesses left: ${game1.remainingGuesses}`
    console.log(game1.status)
})
