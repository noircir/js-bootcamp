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
    const todoEl = document.querySelector('#div__todos')
    // SOLUTION 3\
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

    const incompletedTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompletedTodos))

    if (filteredTodos.length > 0 ) {
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
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // St up the todo text
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
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM element for list summary
const generateSummaryDOM = (incompletedTodos) => {
    const summaryEl = document.createElement('h2')
    summaryEl.classList.add('list-title')
    const plural = incompletedTodos.length === 1 ? '' : 's'
    summaryEl.textContent = `You have ${incompletedTodos.length} incompleted todo${plural} left`
    return summaryEl
}