let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Account is locked.')
} else if (userRole === 'admin') {
    console.log('Welcome admin!')
} else {
    console.log('Welcome!')
}

let temp = 45

if (temp <= 32) {
    console.log('It\'s freezing outside!')
} else if (temp >= 100) {
    console.log('It is hot outside!')
} else {
    console.log('Go for it. It is pretty nice out.')
}