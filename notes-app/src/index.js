import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

renderNotes()

// Create a note
document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = createNote()
    location.assign(`/edit.html#${id}`)
})

// Search for a note
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

// Drop-down box functionality 
document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

// Re-draw notes in sync with other tab that is being edited
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }
})


