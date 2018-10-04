const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
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