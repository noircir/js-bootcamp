const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

// ^^ We have to throw an error first, to be caught by the 'catch'statement

try {
    const result = getTip('string')
    console.log(result)
} catch (e) {
    console.log('Catch block is running')
}

