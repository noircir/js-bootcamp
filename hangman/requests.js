// getPuzzle is a function that takes a function as an argument. 
// We call this argument function a "callback".

const getPuzzle = (wordCount, callback) => {
    // You can't use a return statement because getPuzzle is effectively 
    // an asychronous function. By the time the asynchronous function 
    // has finished executing, the JavaScript engine has moved pass it 
    // to continue executing the rest of the program. 
    // If you want to access and do stuff with the results from the HTTP request, 
    // you must do so inside of the request.addEventListener callback.

    // Making an HTTP request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        // e.target is the request itself
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

// Synchronous execution (deprecated) waits until the request is completed
// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest()
//     // 'false' - forcing to wait
//     request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false)
//     request.send()

//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     } else if (request.readyState === 4) {
//         throw new Error('Things did no t go well')
//     }
// }

const getCountry = (countryCode, callback) => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {

            const data = JSON.parse(e.target.responseText)
            // 'filter' will return an array with one element; 'find' returns an object
            const country = data.find((country) => country.alpha2Code === countryCode.toUpperCase())
            callback(undefined, country.name)

        } else if (e.target.readyState === 4) {
            callback('Unable to fetch data')
        }
    })

    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()

}