// const todos = ['Todo 1', 'Walk the dog', 'Swimming pool', 'Fix the bike', 'Todo 5']


// console.log(`You have ${todos.length} todos`)

// console.log(todos[0])
// console.log(todos[todos.length - 2])

// Delete the 3rd item
// todos.splice(2, 1)
// console.log(todos)

// todos.push('Read a book')
// console.log(todos)

// todos.unshift('Ride a horse')
// console.log(todos)

// todos.forEach(function (item, index) {
//     console.log(`${index+1}. ${item}`)
// })

// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`)
// }


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

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)



// const deleteTodo = function (array, text) {
//     const index = array.findIndex(function (item) {
//         return item.text.toLowerCase() === text.toLowerCase()
//     })
//     if (index > -1) { 
//         array.splice(index, 1)
//     }
//     return array
// }

// deleteTodo(todos, 'Buy food')
// console.log(todos)

// const getThingsToDo = function (todos) {
//     return todos.filter(function (todo) {
//         return !todo.completed
//     })
// }

// console.log(getThingsToDo(todos))