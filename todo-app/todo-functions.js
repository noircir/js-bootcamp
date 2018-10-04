// Fetch existing todos from localStorage
const getSavedTodos = function () {
    todosJSON = localStorage.getItem('todos')
    console.log(todosJSON)
    // If local storage has data, parse it and use it
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    // SOLUTION 3

    const filteredTodos = todos.filter(function (todo) {
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

    filteredTodos.forEach(function (todo) {
        document.querySelector('#div__todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove a todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
        
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle 'completed' property 
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const todoTextEl = document.createElement('span')
    const removeButton = document.createElement('button')

    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.completed
    todoEl.appendChild(checkboxEl)

    todoTextEl.textContent = todo.text
    todoEl.appendChild(todoTextEl)

    checkboxEl.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM element for list summary
const generateSummaryDOM = function (filteredTodos) {

    const incompletedTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    
    document.querySelector('#div__todos').innerHTML = ''
    
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompletedTodos.length} incompleted todos left`
    document.querySelector('#div__todos').appendChild(summary)
}