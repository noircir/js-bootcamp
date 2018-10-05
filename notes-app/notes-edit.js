const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
const dateEl = document.querySelector('#last-edited')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

// If no note with such id exists, redirect back to the home page
if (note === undefined) {
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body
dateEl.textContent = generateLastEdited(note.updatedAt)

noteTitle.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

noteBody.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeEl.addEventListener('click', (e) => {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

// how to keep data updating in other tabs of the same session
window.addEventListener('storage', (e) => {
    // e object has 'key' value with 'old' and 'new' content.
    // Assign the new content and redraw the values.
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)

        note = notes.find((note) => note.id === noteId)

        // If no note with such id exists, redirect back to the home page
        if (note === undefined) {
            location.assign('/index.html')
        }

        noteTitle.value = note.title
        noteBody.value = note.body
        dateEl.textContent = generateLastEdited(note.updatedAt)
    }

})