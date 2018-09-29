if (10 === 10) {
    var firstName = 'Sigourney'
}

// not good !!! re-assigning the same variable.


console.log(firstName)  // 'Sigourney'.  var is function-scoped, not blocked scoped


// const setName = function () {
//     var fName = 'Dmitri'
// }

// setName()
// console.log(fName)   // error. var is scoped tot he function only.

//============================================
//  Difference between var and let: hoisting
//============================================

// let age
// console.log(age)  // undefined. Silent declaration.

console.log(age) // undefined. This doesn't work with 'let'.
var age = 10 
// even if we declared in the middle, this declaration 
// is accepted as if it was declared at the beginning. 

// Even if 10 is assigned, anly the declaration is hoisted, not the value. 
console.log(age)