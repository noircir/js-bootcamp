
const todos = [{
    text: "Wonderful",
    completed: true
},
{
    text: "Apple",
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

// Find how many incompleted todos there are
const incompletedTodos = todos.filter(function(todo) {
    return !todo.completed
})

// Add a heading to the document
const newHeading = document.createElement('h2')
newHeading.textContent = `You have ${incompletedTodos.length} incompleted todos left`
document.querySelector('body').appendChild(newHeading)

// List all todos
todos.forEach(function(todo) {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = todo.text
    document.querySelector('body').appendChild(newParagraph)
})

// Search amidst todos
document.querySelector('#body__search-todo-input').addEventListener('input', function (e) {
    console.log(e.target.value)
})

// Add event listener on Add a Todo button
document.querySelector('#body__add-todo-button').addEventListener('click', function (e) {
    console.log('The button "Add a Todo" was clicked.')
    // e.target.textContent = "The button was clicked"
}) 