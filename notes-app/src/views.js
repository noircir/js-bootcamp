import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

// Generate the 'Last edited' message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        // add class in JS file!!!
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // Set up the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        note.title = 'Unnamed note'
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // set up the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // Set up the status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

const initializeEditPage = (noteId) => {
    const noteTitle = document.querySelector('#note-title')
    const noteBody = document.querySelector('#note-body')
    const dateEl = document.querySelector('#last-edited')

    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign('/index.html')
    }

    noteTitle.value = note.title
    noteBody.value = note.body
    dateEl.textContent = generateLastEdited(note.updatedAt)
}

export { generateLastEdited, renderNotes, generateNoteDOM, initializeEditPage }