const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Australia', 9)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

// Listen for keypresses
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
    console.log(game1.status)
})
