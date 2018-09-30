
const todos = [{
    text: "Wonderful",
    completed: true
},
{
    text: "Apple food",
    completed: false
},
{
    text: "Buy food",
    completed: true
},
{
    text: "Read",
    completed: true
},
{
    text: "Zena",
    completed: false
}]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Summary of incompleted todos always is rendered
    const incompletedTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#body__search-result-todos').innerHTML = ''

    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompletedTodos.length} incompleted todos left`
    document.querySelector('#body__search-result-todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const foundTodo = document.createElement('p')
        foundTodo.textContent = todo.text
        document.querySelector('#body__search-result-todos').appendChild(foundTodo)
    })
}

renderTodos(todos, filters)

// Search for todos
document.querySelector('#body__search-todo-input').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)

})

// Add event listener on Add a Todo button
document.querySelector('#body__add-todo-button').addEventListener('click', function (e) {
    console.log('The button "Add a Todo" was clicked.')
    // e.target.textContent = "The button was clicked"
}) 