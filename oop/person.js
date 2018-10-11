// Prototypal Inheritance 
// myPerson --> Person.prototype --> Object.prototype --> null

// Syntactical sugar: different syntax for the same class.
// But it does look better and more concise!

class Person {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }     // no comma
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like.toLowerCase()}.`
        })

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        // call parent's constructor
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        return this.grade < 70 ? `${this.firstName} is failing the class` : `${this.firstName} is passing the class`
    }
    upgradeGrade(amount) {
        this.grade += amount
    }
}

// // The 'new' operator, behind the scene, generates a new empty object
// // then gives us access to this object and the constructor function via 'this' value.
// // It uses 'return' operator implicitly
// const me = new Employee('Sigourney', 'Wamback', 15,  'Teacher', ['Drawing', 'Roblox'])
// me.setName('Alexis Turner')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('Clancey', 'Turner', 54, ['Fishing', 'Hiking'])
// person2.setName('Morgan Cook')
// console.log(person2.getBio())

// const student1 = new Student ('Robin', 'Lugo', 28, 70, ['Fishing', 'Hiking'])
// student1.fullName = 'Tom Clancy'
// console.log(student1.getBio())
// student1.upgradeGrade(-10)
const me = new Employee ('Robin', 'Lugo', 28, 'Teacher', ['Fishing', 'Hiking'])
me.fullName = 'Tom Clancy'
console.log(me.getBio())
