//===========================
// Callback
//===========================

const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

// Callback hell

getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        // If no error, 2 becomes 4 because of callback(num * 2), and a new callback transforms it into 8. 
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err')
            } else {
                console.log(data)
            }
        })
    }
})

//===========================
// Promise
//===========================

// Wrapper for a new Promise, to be able to pass more arguments
// Chaining promise twice, because of calling two different APIs

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000);
}) 

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

// Promise chaining with 'return' allow create complex asynchronous programs
// without complex asynchronous code

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return 'this is some test data'
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})