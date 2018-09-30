
const todos = [{
    text: "Wonderful theater production water about food",
    completed: true
},
{
    text: "Apple was sparkling with sweaty water dew",
    completed: false
},
{
    text: "Buy food",
    completed: true
},
{
    text: "Read more of Chech author about water apples and dew",
    completed: true
},
{
    text: "Zena is a strange production name. She eats strange food.",
    completed: false
}]

const filters = {
    searchText: '',
    hideCompleted: false
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
        const foundTodo = document.createElement('p')
        foundTodo.textContent = todo.text
        document.querySelector('#div__todos').appendChild(foundTodo)
    })
}

// Initial rendering of all todos
renderTodos(todos, filters)

// As client types the search string, keep re-rendering results
document.querySelector('#body__search-todo-input').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Add a new todo form
document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    newTodo = {
        text: e.target.elements.newTodo.value,
        completed: false
    }
    todos.push(newTodo)
    e.target.elements.newTodo.value = ''
    renderTodos(todos, filters)
    console.log(todos)
})

// If "Hide completed" checkbox is checked, update filter
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})