const myPerson = new PersonClass('Nellie', 'Ka', 25, ['Biking', 'Bodybuilding'])
console.log(myPerson.getBio())

// constructor function
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

// Prototype property of a constructor function is an object. 
// All instances have access to this 'prototype' object.

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    // We are able to use 'this' inside the callback function passed to 'forEach', 
    // because arrow function doesn't bind the 'this' value, 
    // it uses 'this' of the parent, which is set up on line 16.
    // If we replace the arrow function with regular function, the code will break.

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like.toLowerCase()}.`
    })

    return bio
}
// ^^ Usually only methods are set up onto prototype so every instances have access.
// But there are no restrictions on prototype objects: 
// static data would also work (though it is not very useful):  

// Person.prototype.location = 'Thailand'

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}
