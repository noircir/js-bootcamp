let num = 103.941

// console.log(num.toFixed(2))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min +1)) + min
console.log(randomNum)

let makeGuess = function (guessNum) {
    let randomNum = Math.floor(Math.random() * (5)) + 1
    return (guessNum === randomNum)
}

console.log(makeGuess(4))
console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
console.log(makeGuess(5))