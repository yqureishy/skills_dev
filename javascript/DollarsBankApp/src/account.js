export const Account = class Account {
    constructor(name, address, phoneNumber, userId, pin, deposit, transactions = []) {

        this.name = name
        this.address = address
        this.phoneNumber = phoneNumber
        this.userId = userId
        this.pin = pin
        this.deposit = deposit
        this.transactions = transactions
    }


}

export const transactionClass = class Transaction {
    constructor(date, balanceInitial, balanceAfter) {
        this.date = date;
        this.balanceInitial = balanceInitial;
        this.balanceAfter = balanceAfter

    }
}

