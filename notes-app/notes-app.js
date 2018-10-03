const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

// Create a note
document.querySelector('#create-note').addEventListener('click', function (e) {

    const id = uuidv4()

    notes.push({
        id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    // Redirect redirect to a location with id
    location.assign(`/edit.html#${id}`)
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
