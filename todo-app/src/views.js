import { getTodos, removeTodo, toggleTodo } from './todos'
import { getFilters } from './filters'

// renderTodos
// Arguments: none
// Return value: none

const renderTodos = () => {
    const todoEl = document.querySelector('#div__todos')
    const filters = getFilters()
    
    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase().trim())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompletedTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompletedTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const notificationMsg = document.createElement('p')
        notificationMsg.classList.add('empty-message')
        notificationMsg.textContent = 'There are no to-dos to show'
        todoEl.appendChild(notificationMsg)
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const todoTextEl = document.createElement('span')
    const removeButton = document.createElement('button')

    // Set up todo checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.completed
    containerEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // Set up the todo text
    todoTextEl.textContent = todo.text
    containerEl.appendChild(todoTextEl)

    // Set up container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Set up the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })
    return todoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompletedTodos) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const plural = incompletedTodos.length === 1 ? '' : 's'
    summary.textContent = `You have ${incompletedTodos.length} incompleted todo${plural} left`
    return summary
}

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }