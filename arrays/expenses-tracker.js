const account = {
    name: 'Nellie Ka',
    income: [],
    expenses: [],
    addIncome: function (title, amount) {
        this.income.push({ title, amount })
    },
    addExpense: function (title, amount) {
        this.expenses.push({ title, amount })
    },
    getAccountSummary: function () {
        let totalIncome = 0
        let totalExpense = 0

        this.income.forEach(function (item) {
            totalIncome = totalIncome + item.amount
        })
        
        this.expenses.forEach( function (expense) {
            totalExpense = totalExpense + expense.amount
        })
        return `${this.name} has a balance of $${totalIncome - totalExpense}. $${totalIncome} in income. $${totalExpense} in expenses`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Nellie ka has $1250 in expenses.
// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary -> income, expenses, balance
// Nellie Ka has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 950)
// console.log(account)
account.addExpense('Coffee', 2)
// console.log(account)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

