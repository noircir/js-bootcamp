// getPuzzle is a function that takes a function as an argument. 
// We call this argument function a "callback".

// ==============================================
// Definition of getPuzzle() with a callback
// ==============================================

// const getPuzzle = (wordCount, callback) => {
//     // You can't use a return statement because getPuzzle is effectively 
//     // an asychronous function. By the time the asynchronous function 
//     // has finished executing, the JavaScript engine has moved pass it 
//     // to continue executing the rest of the program. 
//     // If you want to access and do stuff with the results from the HTTP request, 
//     // you must do so inside of the request.addEventListener callback.

//     // Making an HTTP request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         // e.target is the request itself
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data.puzzle)
//         } else if (e.target.readyState === 4) {
//             callback('An error has taken place', undefined)
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// }


// ==============================================
// Definition of getPuzzle() with a promise
// ==============================================

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         // e.target is the request itself
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })
    


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


// getCountry with XMLHttpRequest

const getCountryOld = (countryCode) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {

            const data = JSON.parse(e.target.responseText)
            // 'filter' will return an array with one element; 'find' returns an object
            const country = data.find((country) => country.alpha2Code === countryCode.toUpperCase())
            resolve(country.name)

        } else if (e.target.readyState === 4) {
            reject('Unable to fetch data')
        }
    })

    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
})

// Using 'fetch'

const getPuzzleFetch = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

// Using 'async/await'

const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable fetch the puzzle')
    }
}

// getCountry with Fetch

const getCountryFetch = (countryCode) => {
    return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
        if (response.status == 200) {
            // returning promise here
            return response.json() 
        } else {
            throw newError('Unable to fetch country')
        }
        // getting an array of countries here
    }).then((data) => {
        // now object
        const countryObj = data.find((country) => country.alpha2Code === countryCode.toUpperCase())
        // now property
        return countryObj.name
    })
}

// getCountry with async/await

const getCountry = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`)
    
    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode.toUpperCase())
    } else {
        throw new Error('Unable to fetch country')
    }
}

const getLocationFetch = () => {
    return fetch('http://ipinfo.io/json?token=de53b5019be5e7').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to locate information')
        }
    })
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=de53b5019be5e7')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to find location by IP address')
    }
}

const getWeather = (location) => {
    return fetch(`http://api.darksky.net/forecast/8728b0a3da597a2260792a25873b1420/${location.loc}`).then((res) => {
        if (response.status === 200) {
            return res.json()
        } else {
            throw new Error('Unable to locate information')
        }
    })
}

// Find country code by IP address, then full country name by country code
// !!!!!!!

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}
