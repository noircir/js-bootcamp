let greetUser = function (name) {
    // console.log('Welcome', name)
    console.log(`Welcome ${name}`)
}

greetUser('Nellie')

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

let tempConverter = function(farenheight) {
    let result = (farenheight - 32) * 5 / 9
    return result
}

let celsius = tempConverter(68)
console.log(celsius)