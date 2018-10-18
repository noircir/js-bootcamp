import Hangman from './hangman'
import getPuzzle from './requests'

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
    // puzzleEl.textContent = game1.puzzle  // the old way we called this getter 'puzzle'
    // Now drawing each letter within a <span>
    puzzleEl.innerHTML = ''

    game1.puzzle.split('').forEach((letter) => {
        const puzzleChar = document.createElement('span')
        puzzleChar.textContent = letter
        puzzleEl.appendChild(puzzleChar)
    })
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()