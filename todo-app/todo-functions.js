'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos))

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    // SOLUTION 3

    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase().trim())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    // SOLUTION 2

    // let filteredTodos = todos.filter(function (todo) {
    //     return todo.text.toLowerCase().includes(filters.searchText.toLowerCase().trim())
    // })

    // // One liner to either hide completed, or not.
    // filteredTodos = filteredTodos.filter(function (todo) {
    //     return !filters.hideCompleted || !todo.completed
    // })


    // SOLUTION 1

    // let filteredTodos = todos.filter(function (todo) {
    //     return todo.text.toLowerCase().includes(filters.searchText.toLowerCase().trim())
    // })

    // if (filters.hideCompleted) {
    //     filteredTodos = filteredTodos.filter(function (todo) {
    //         return !todo.completed
    //     })
    // }  


    generateSummaryDOM(filteredTodos)

    filteredTodos.forEach((todo) => {
        document.querySelector('#div__todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove a todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
        
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle 'completed' property 
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const todoTextEl = document.createElement('span')
    const removeButton = document.createElement('button')

    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.completed
    todoEl.appendChild(checkboxEl)

    todoTextEl.textContent = todo.text
    todoEl.appendChild(todoTextEl)

    checkboxEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM element for list summary
const generateSummaryDOM = (filteredTodos) => {

    const incompletedTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })
    
    document.querySelector('#div__todos').innerHTML = ''
    
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompletedTodos.length} incompleted todos left`
    document.querySelector('#div__todos').appendChild(summary)
}