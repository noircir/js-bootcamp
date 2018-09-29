let tempConverter = function (farenheight) {
    let celsius = (farenheight - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let celsius = tempConverter(68)
console.log(celsius)