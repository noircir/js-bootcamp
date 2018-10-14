class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters = ['']
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
    }
    get puzzle() {
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
    // Before transforming function to getter

    // getPuzzle() {
    //     let puzzle = ''
    //     this.word.forEach((letter) => {
    //         if (this.guessedLetters.includes(letter) || letter === ' ') {
    //             puzzle += letter
    //         } else {
    //             puzzle += '*'
    //         }
    //     })
    //     return puzzle
    // }
    makeGuess(letter) {
        letter = letter.toLowerCase()
        const isBadGuess = !this.word.includes(letter)
        const isUnique = !this.guessedLetters.includes(letter)

        if (this.status !== 'playing') {
            // Stop the game: 'return' will return 'undefined'
            return
        }

        if (isUnique) {
            this.guessedLetters.push(letter)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ' )

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        }
        if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        }
        if (this.status === 'finished') {
            return `Great work! You guessed the word.`
        }
    }
    // Before transforming function to getter

    // getStatusMessage() {
    //     if (this.status === 'playing') {
    //         return `Remaining guesses left: ${this.remainingGuesses}`
    //     }
    //     if (this.status === 'failed') {
    //         return `Nice try! The word was "${this.word.join('')}"`
    //     }
    //     if (this.status === 'finished') {
    //         return `Great work! You guessed the word.`
    //     }
    // }
}
