
let todos = []

const filters = {
    searchText: '',
    hideCompleted: false
}

// Read and parse the data when the app starts up
const todosJSON = localStorage.getItem('todos')
// If local storage has data, parse it and use it
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

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

    // To render heading, filter yet again for incompleted todos
    const incompletedTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    // 1) Set up a clean slate
    document.querySelector('#div__todos').innerHTML = ''

    // 2) Render heading
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompletedTodos.length} incompleted todos left`
    document.querySelector('#div__todos').appendChild(summary)

    // 3) Render search results
    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p')

        // if (todo.text.length > 0) {
            todoEl.textContent = todo.text
        // } else {
        //     todoEl.textContent = 'Unnamed todo'
        // }

        document.querySelector('#div__todos').appendChild(todoEl)
    })
}

// Initial rendering of all todos
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
    todos.push(newTodo)
    if (newTodo.text !== "") {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    e.target.elements.newTodo.value = ''
    renderTodos(todos, filters)
    console.log(todos)
})

// If "Hide completed" checkbox is checked, update filter
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})