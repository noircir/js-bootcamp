
// constructor function
const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

// The 'new' operator, behind the scene, generates a new empty object
// then gives us access to this object and the constructor function via 'this' value.
// It uses 'return' operator implicitly
const me = new Person('Sigourney', 'Wamback', 15)
me.firstName = 'Jen'
console.log(me)

const person2 = new Person('Clancey', 'Turner', 54)
console.log(person2)