const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

// Local variables (arguments) don't exist in arrow functions
const add2 = () => {
    return arguments[0] + arguments[1]
}

console.log(add2(11, 22))

// arrow functions don't bind their 'this' value, cannot be used in most methods

const car = {
    color: 'Red',
    getSummary: function () {
        return `The color is ${this.color}`
    }
}

console.log(car.getSummary())

// another way of method declaration
const car2 = {
    color: 'Green',
    getSummary() {
        return `The color is ${this.color}`
    }
}

console.log(car2.getSummary())