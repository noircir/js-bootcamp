const person = {
    age: 27
} 

// even if 'person' is const, properties inside can be changed.
person.age = 28
console.log(person)  // { age: 28 }