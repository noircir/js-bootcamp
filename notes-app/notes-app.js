const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

// Create a note
document.querySelector('#create-note').addEventListener('click', function (e) {
    // empty note by default
    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

// Search for a note
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value 
    renderNotes(notes, filters)
}) 

// Drop-down box functionality (not)
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})
