const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = ['']
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function (letter) {
    letter = letter.toLowerCase()
    const isGoodGuess = this.word.includes(letter)

    if (!this.guessedLetters.includes(letter)) {
        this.guessedLetters.push(letter)

        if (!isGoodGuess && this.remainingGuesses !== 0) {
            this.remainingGuesses -= 1
        }
    }
}

const game1 = new Hangman ('Cat', 4)

// game1.makeGuess('c')
console.log(`Puzzle: ${game1.getPuzzle()}`)
console.log(`Remaining guesses: ${game1.remainingGuesses}`)

const game2 = new Hangman('New Jersey', 4)
// game2.makeGuess('p')
// console.log(`Puzzle: ${game2.getPuzzle()}`)
// console.log(`Remaining guesses: ${game2.remainingGuesses}`)

// Listen for keypresses
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(`Puzzle: ${game1.getPuzzle()}`)
    console.log(`Remaining guesses: ${game1.remainingGuesses}`)
})

