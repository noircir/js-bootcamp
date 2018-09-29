let getTip = function (billTotal, tip = 0.2) {
    return ` A ${100 * tip}% on $${billTotal} would be $${billTotal * tip}`  
}

console.log(getTip(100));