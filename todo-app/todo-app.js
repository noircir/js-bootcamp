
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

// List incompleted todos
todos.forEach(function(todo) {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = todo.text
    document.querySelector('body').appendChild(newParagraph)
})

// const ps = document.querySelectorAll('p')

// console.log(ps)

// ps.forEach(function (p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     }
// })