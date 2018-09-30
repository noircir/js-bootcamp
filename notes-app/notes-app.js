// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     p.textContent = '*********'
//     console.log(p.textContent)
//     // p.remove()
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent= 'It was a nice walk'
// document.querySelector('body').appendChild(newParagraph)

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

const filters = {
    searchText: 'a'
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const foundNote = document.createElement('p')
        foundNote.textContent = note.title
        document.querySelector('#notes').appendChild(foundNote)
    })
}
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    // console.log(e)
    e.target.textContent = "The button was clicked"
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value 
    renderNotes(notes, filters)
}) 



// --- Single ---
// p
// #replace
// .item

// --- Multiple ---
// p#order
// button.inventory
// h1#title.application
// h1.application#title
