
// let name = 'Nellie'

if (true) {
    // let name = 'Mike'
    if (true) {
        // Leaked global: assigning a value to a variable that was never declared. 
        // It automatically becomes global.
        let name = 'Jet'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}