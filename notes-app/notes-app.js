let notes = getSavedNotes()

const filters = {
    searchText: ''
}
const timestamp = moment().valueOf()

renderNotes(notes, filters)

// Create a note
document.querySelector('#create-note').addEventListener('click', function (e) {

    const id = uuidv4()

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
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value 
    renderNotes(notes, filters)
}) 

// Drop-down box functionality (not)
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// 1. Add createdAt and updatedAt to the new notes (store timestamp)
// 2. Update updatedAt when someone edits a title or body
// 3. Delete all old notes before testing

