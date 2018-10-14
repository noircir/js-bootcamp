const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 1000);
}) 

// async/await turn the flow into looking like functional programming.
// No more then() chaining.
// Also, no more explicit error throwing needed.

// Adding just 'async' word changes return to Promise
const processData = async () => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log('Data', data)
}).catch((e) => {
    console.log('Error:', e)
})