// Undefined for variable
let name 

name = 'Chuck'

if (name === undefined) {
     console.log('Please provide a name.')
} else {
    console.log(name)
}


// Undefined for function arguments
let square = function (num) {
    console.log(num)
}


// Undefined as function return default value
let result = square()
console.log(result)

// Explicitly assigning value = null
// To distinguish if teh value was 'undefined' by accident or re-assigned by developer, a 'null'
// was developed. Assign a null, not undefined.
let age = 27

age = null

console.log(age)
