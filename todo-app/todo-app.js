
const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// As client types the search string, keep re-rendering results
document.querySelector('#body__search-todo-input').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Add a new todo 
document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    newTodo = {
        text: e.target.elements.newTodo.value,
        completed: false
    }
    if (newTodo.text !== "") {
        todos.push(newTodo)
        saveTodos(todos)
    }
    e.target.elements.newTodo.value = ''
    renderTodos(todos, filters)
})

// If "Hide completed" checkbox is checked, update filter
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})