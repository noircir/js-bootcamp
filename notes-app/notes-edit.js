const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})

// If no note with such id exists, redirect back to the home page
if (note === undefined) {
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body

noteTitle.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

noteBody.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeEl.addEventListener('click', function (e) {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

// how to keep data updating on other tabs
window.addEventListener('storage', function (e) {
    // e object has 'key' value with 'old' and 'new' content.
    // Assign the new content and redraw the values.
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)

        note = notes.find(function (note) {
            return note.id === noteId
        })

        // If no note with such id exists, redirect back to the home page
        if (note === undefined) {
            location.assign('/index.html')
        }

        noteTitle.value = note.title
        noteBody.value = note.body
    }

})