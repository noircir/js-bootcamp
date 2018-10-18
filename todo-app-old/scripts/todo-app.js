'use strict'

const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// As client types the search string, keep re-rendering results
document.querySelector('#body__search-todo-input').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Add a new todo 
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    let text = e.target.elements.newTodo.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
    }
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

// If "Hide completed" checkbox is checked, update filter
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})