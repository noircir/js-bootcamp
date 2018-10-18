'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

// Create a note
document.querySelector('#create-note').addEventListener('click', (e) => {

    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    // Redirect redirect to a location with id
    location.assign(`/edit.html#${id}`)
})

// Search for a note
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value 
    renderNotes(notes, filters)
}) 

// Drop-down box functionality 
document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

// Re-draw notes in sync with other tab that is being edited
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})
