const products = []
const product = products[0]

// Falsy values - false, 0, empty string, null, undefined, NaN
// Everything else is truthy, even an empty array or an empty object

if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}
