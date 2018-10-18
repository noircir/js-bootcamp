import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
const dateEl = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

noteTitle.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

noteBody.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

removeEl.addEventListener('click', (e) => {
    removeNote(noteId)
    location.assign('/index.html')
})

// how to keep data updating in other tabs of the same session
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage()
    }
})