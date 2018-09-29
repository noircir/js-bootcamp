// const notes = ['Note 1', 'Note 2', 'Note 3']


// notes.push('My new note')
// console.log(notes.length)

// // Last array item
// console.log(notes[notes.length - 1])
// console.log(notes)

// const removedItem = notes.pop()
// console.log(notes)
// console.log(removedItem)

// // shift removes the first item
// notes.shift()
// console.log(notes)


// notes.unshift('QQQWWWEEE')
// console.log(notes)

// Inserting an item, withrout deleting anything.
// notes.splice(1, 0, 'February')
// console.log(notes)

// notes.splice(1, 1, 'February')

// notes[2] = 'Go camping'
// // console.log(notes)

// notes.forEach(function (item, index) {
//     console.log(item)
//     console.log(index)
// })

// notes.indexOf('Note 2')
// console.log(notes.indexOf('Note 8'))

const notes = [
    {
        title: "Maria", 
        text: "I would like to go to Spain"
    }, {
        title: "Hobbit",
        text: "Exercise. Eating a bit better."
    }, {
        title: "Office",
        text: "Get a new seat"
    }, {
        title: "Wonderful",
        text: "Get a new seat"
    }, {
        title: "Apple",
        text: "Get a new seat"
    }
]

// console.log(notes)

// console.log(notes.indexOf({}))

// // comparing two objects is always False
// console.log({} === {})

// // But: if one object is assigned to another, then True
// let someObj = {}
// let otherObj = someObj
// console.log(someObj === otherObj)

// An alternative way of finding index for objects
// Search stops when finds the first match
// const index = notes.findIndex(function (note, index) {
//     console.log(note, index)
//     return note.title === 'Habits to work on'
// })

// console.log(index)

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'office modification')
// console.log(note)

// const findTextInNote = function (notes, text) {
//     const index = notes.findIndex(function (note, index) {
//         return note.text.toLowerCase() === text.toLowerCase()
//     })
//     return notes[index]
// }

// const note2 = findTextInNote(notes, 'I would like to go to spain')
// console.log(note2)

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const findNotes = function (notes, query) {
//     return notes.filter(function (note) {
//         const isTitleMatch = note.title.toLowerCase().includes(query)
//         const isBodyMatch = note.text.toLowerCase().includes(query)
//         return isTitleMatch || isBodyMatch
//     })
// }

// console.log(findNotes(notes, 'eating'))

// const note = findNote(notes, 'office modification')
// console.log(note)


// 'sort" is running over the whole array several times (bubble sort?)
// The function just tells sort what to compare (titles) .
// Returns are important for sorting.

const sortNotes = function (notes) {
    return notes.sort(function (a,b) {
        // console.log(`a.title: ${a.title} ad b.title: ${b.title}`)
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            // If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            // If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
            return 1
        } else {
            // If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)