class BankAccount {
    constructor(firstName, lastName, accountType, balance, status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountType = accountType;
        this.balance = balance;
        this.status = status;
    }

    transfer(amount, toTransferAccount) {
        if (this.balance < 0) {
            this.balance -= 35
            this.balance -= amount
            toTransferAccount.balance += amount
        }
        else {
            this.balance -= amount
            toTransferAccount.balance += amount
            if (this.balance < 0) {
                this.balance -= 35
            }
        }
    }

    withdraw(amount) {
        if (this.balance < 0) {
            this.balance -= 35
            this.balance -= amount
        }
        else {
            this.balance -= amount
            if (this.balance < 0) {
                this.balance -= 35
            }
        }
    }
}

let YounusAccountCheckings = new BankAccount("Younus", "Qureishy", "Checkings", 100, "Opened");
let YounusAccountSavings = new BankAccount("Younus", "Qureishy", "Savings", 1000, "Opened")



console.log(YounusAccountCheckings.balance)
YounusAccountSavings.transfer(200, YounusAccountCheckings)
console.log(YounusAccountCheckings.balance)
console.log(YounusAccountSavings.balance)
YounusAccountCheckings.withdraw(350)
console.log(YounusAccountCheckings.balance)
YounusAccountSavings.transfer(810, YounusAccountCheckings)
console.log(YounusAccountCheckings.balance)
console.log(YounusAccountSavings.balance)
