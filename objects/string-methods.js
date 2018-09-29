let name = '   Nellie Ka  '

// console.log(name.trim().length)
// console.log(name.trim().toUpperCase())
// console.log(name.toLowerCase())
// console.log(name)
// console.log(name.trim().includes('Ka'))

let isValidpassword = function (myString) {
    return (myString.trim().length > 8 && !myString.includes('password'))
}

console.log(isValidpassword('asdfr'))
console.log(isValidpassword('asdf123%$^r'))
console.log(isValidpassword('asdfrpassword79879'))