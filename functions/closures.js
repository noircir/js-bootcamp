// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()

//=========================================================
// Protecting data (counter cannot be accessed or altered, 
// except for predefined set of methods)
//=========================================================

const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()

counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())  // -1

// Adder 
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))

//========================================================================
// Currying = transforming a single function that takes many arguments,
// into many functions that take subsets of those arguments
//========================================================================

const add = (a, b) => a + b
// Currying is turning this straightforward 'add' function into 'adder'

// Tipper
const tipper = (percentage) => {
    return (billAmount) => {
        return (billAmount * percentage) / 100
    }
}
console.log('----- Tipper -----')
const tipper20 = tipper(20)
console.log(tipper20(100))
console.log(tipper20(80))

const tipper15 = tipper(15)
console.log(tipper15(100))
console.log(tipper15(80))
console.log(tipper15(30))