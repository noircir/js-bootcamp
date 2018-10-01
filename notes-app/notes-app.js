let notes = []

const filters = {
    searchText: ''
}

// Check for existing local storage data
const notesJSON = localStorage.getItem('notes')
// If something exists in the local storage, populate notes
// with the local storage data
if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')

        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed note'
        }

        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes, filters)

// Create a note
document.querySelector('#create-note').addEventListener('click', function (e) {
    // empty note by default
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value 
    renderNotes(notes, filters)
}) 

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
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
