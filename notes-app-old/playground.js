
// =================================================
// THE BURDEN OF WORKING WITH BUILT-IN DATE
// AND A CASE FOR MOMENT.JS LIBRARY
// =================================================

// Unix Epoch - January 1st 1970 00:00:00

// const now = new Date()
// // console.log(now.getTime())  // number of seconds between Linux Epoch and now
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const date1 = new Date('February 28, 1965')
const date2 = new Date('March 28, 1939')
const timestamp1 = date1.getTime()
const timestamp2 = date2.getTime()

let earlierTimestamp = 0

if (timestamp1 < timestamp2) {
    earlierTimestamp = timestamp1
} else if (timestamp1 > timestamp2) {
    earlierTimestamp = timestamp2
}

const date = new Date(earlierTimestamp);
console.log(date.toString())



const now = moment()
// console.log(now.toString())
// now.minute(3)
// console.log(now.minute())

// console.log(now.subtract(3, 'days').calendar())

now.add(1, 'year').subtract(3, 'days')
console.log(now.format("MMMM Do, YYYY"))
console.log(moment([2007, 0, 29]).fromNow())
console.log(now.fromNow())
now.subtract(1, 'week')
console.log(now.format("MMMM Do, YYYY"))

// Extracting from timestamp
const nowTimestamp = now.valueOf()
console.log(moment(nowTimestamp).toString())

const myDate = moment().year(1983).month(11).date(30)
console.log(myDate.toString())
console.log(myDate.format("MMM D, YYYY"))