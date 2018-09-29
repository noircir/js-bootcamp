let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples\' History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area

let tempConverter = function (farenheight) {

    return {
        farenheight: farenheight,
        celsius: (farenheight - 32) * 5 / 9,
        kelvin: (farenheight + 459.67) * 5 / 9
    }
}

let temperature = tempConverter(68)
console.log(JSON.stringify(temperature))