
const todos = [{
    text: "Wonderful theater production about food",
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
    text: "Read more of Chech author about apples and dew",
    completed: true
},
{
    text: "Zena is a strange production name. She eats strange food.",
    completed: false
}]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase().trim())
    })

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