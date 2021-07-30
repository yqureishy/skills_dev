class BankAccount {
    constructor(balance, accountType) {
        this.balance = balance
        this.accountType = accountType
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }

}

let bankAccount = new BankAccount(500, "checkings")
console.log(bankAccount)
bankAccount.deposit(175)
console.log(bankAccount)
bankAccount.withdraw(250)
console.log(bankAccount)