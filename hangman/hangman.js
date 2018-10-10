const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    // this.wordStr = this.word.join('')
    this.guessedLetters = ['']
    this.remainingGuesses = remainingGuesses
    this.status = 'playing'
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
    const isBadGuess = !this.word.includes(letter)
    const isUnique = !this.guessedLetters.includes(letter)

    if (isUnique) {
        this.guessedLetters.push(letter)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }

    this.calculateStatus()
}

// Hangman.prototype.calculateStatus1 = function () {
//     // uncomment this.wordStr line in constructor
//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//     }

//     if (this.getPuzzle() === this.wordStr) {
//         this.status = 'finished'
//     }
// }

// Hangman.prototype.calculateStatus2 = function () {
//     const lettersUnguessed = this.word.filter((letter) => {
//         return !this.guessedLetters.includes(letter)
//     })
//     const finished = lettersUnguessed.length === 0

//     // let finished = true

//     // this.word.forEach((letter) => {
//     //     if (!this.guessedLetters.includes(letter)) {
//     //         finished = false
//     //     }
//     // })

//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter)
    })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}
