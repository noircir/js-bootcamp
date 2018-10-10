// Primitive value: string, number, boolean, null, undefined (, symbol)
// But three of them: string, number, and boolean, are "object wrappers" => 
// so the methods like .split() are available

// Primitive: myNum --> Object.prototype --> null
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNymber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// Literal syntax

const product = {
    name: 'Influence'
}

// hasOwnProperty

console.log(product.hasOwnProperty('name'))
console.log(product.valueOf())
// console.log(product)

// Literal syntax
const team = ['Luke', 'Madison']
const team2 = new Array(['Luke', 'Madison'])
console.log(team.hasOwnProperty('length'))

const product2  = "Computer"
console.log(product2)
const otherProduct  = new String('elephant')
console.log(otherProduct)
console.log(otherProduct.lastIndexOf('e'))

const myBool = new Boolean(true)
console.log(myBool)