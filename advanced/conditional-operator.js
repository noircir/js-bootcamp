// const myAge = 25
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'
// console.log(message)

const myAge = 15
const showPage = () => 'Showing the page'
const showErrorPage = () => 'Showing the error page'

// conditional operator to run functions
const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Tyler', 'Porter', 'Tyler', 'Porter']

console.log(team.length <= 4 ? `Team size is: ${team.length}` : `Too many people on your team`)