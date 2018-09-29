// const p = document.querySelector('p')
// // p.remove()

// const h6 = document.querySelector('h6')
// console.log(p)
// h6.remove()

const ps = document.querySelectorAll('p')

// console.log(ps)

ps.forEach(function (p) {
    p.textContent = '*********'
    console.log(p.textContent)
    // p.remove()
})

// Add a new element

const newParagraph = document.createElement('p')

newParagraph.textContent= 'It was a nice walk'

document.querySelector('body').appendChild(newParagraph)