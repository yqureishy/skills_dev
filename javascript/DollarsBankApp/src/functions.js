import { isAlpha } from "class-validator";
import ps from "prompt-sync";
import { Account as Account, transactionClass as Transaction } from "./account.js"
// const Account = require("./account.js")
const input = ps({ sigint: true });

let users = []

let loggedInUser = []

var d = new Date()

export const mainMenu = () => {
    console.log("Please choose from the following menu: \n"
        + "\n 1. Create New Account"
        + "\n 2. Login"
        + "\n 3. Exit \n\n");
}

export const login = () => {
    let correct = false;
    while (!correct) {
        let userId = input("UserId: ")
        let pin = input("pin(4 digit number): ")
        try {
            for (let i = 0; i < users.length; i++) {
                if (users[i].userId.match(userId)) {
                    if (users[i].pin.match(pin)) {
                        console.log("Welcome to your page " + users[i].name)
                        loggedInUser[0] = users[i];
                        transactionMenu()
                        break
                    }
                }
                console.log("Incorrect credentials, please try again.")
            }
        } catch (err) {
            console.log(err)
        } break
    }
}

export const newUser = () => {

    let transactions = []



    let name = getName()

    let address = input("Customer Address: ")

    // let phoneNumber = getPhoneNumber()

    let phoneNumber = input("Phone Number: ")

    let userId = input("User Id: ")

    let pin = getPin()

    let deposit = getDeposit()

    let date = d.toString();

    let balanceInitial = 0

    let balanceAfter = deposit

    let transaction = new Transaction(date, balanceInitial, balanceAfter)

    transactions.push(transaction)

    let account = new Account(name, address, phoneNumber, userId, pin, deposit, transactions)



    users.push(account);

    console.log(users[0])


}

var getPin = function () {
    let correct = false;
    let pin;
    while (!correct) {
        pin = input("Pin: ")
        if (!pin.match(/^\d{4}$/)) {
            console.log(`Pin should be exactly 4 digits.  Please try again.`)
        } else {
            correct = true;
        }
    }
    return pin
}


var getName = function () {
    let correct = false;
    let name;
    while (!correct) {
        name = input("Customer Name: ")
        if (name.search(/[^A-Za-z\s]/) != -1) {
            console.log("Name must include letters only")
        } else {
            correct = true;
        }
    }
    return name
}

// var getPhoneNumber = function () {
//     let correct = false;
//     let phoneNumber;
//     while (!correct) {
//         phoneNumber = input("Customer Contact Number: ");
//         if (!phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
//             console.log(`Phone Number must be in one of the following formats: \n(123) 456-7890\n(123)456 - 7890\n123 - 456 - 7890\n123.456.7890\n1234567890\n+ 31636363634\n075 - 63546725`)
//         } else {
//             correct = true;
//         }
//     }
//     return phoneNumber
// }

let getDeposit = function () {
    let correct = false;
    let deposit;
    while (!correct) {
        deposit = input("Please select the amount you would like to deposit into this account($ 00.00): $")
        if (deposit.match(/^\d+\.\d{0,3}$/)) {
            correct = true;
        } else {
            console.log(`Please enter numbers only in monetary format.`)
        }
    }
    return deposit
}



export const printAccounts = () => {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}

export const transactionMenu = () => {
    let choice = 0;
    while (choice != 6) {

        console.log(`
   1: Account Balance Check
   2: Print Transactions
   3: Update PIN
   4: Withdraw Amount
   5: Deposit Amount
     `)

        let choice = input("Choose a number(1-6): ")

        switch (parseInt(choice)) {
            case 1: accountBalance()
                break;
            case 2: console.log("Print Transactions")
                break
            case 3: updatePin()
                break
            case 4: withdraw()
                break;
            case 5: deposit()
                break
            case 6: console.log("Sign Out")
                break
        }
    }
}

const accountBalance = () => {
    console.log("Your account balance is: $" + loggedInUser[0].deposit)

    let anyKey = input("Press any key and hit enter for transaction menu: ");

}

const updatePin = () => {

    let correct = false;
    while (!correct) {
        let oldPin = input("Enter your current pin: ")
        if (oldPin.match(loggedInUser[0].pin)) {
            console.log("Please enter new pin: ")
            let newPin = getPin()
            loggedInUser[0].pin = newPin
            console.log("Your new pin has been updated. Thank you.")
            console.log(loggedInUser[0])
            correct = true;
        }
        else {
            console.log("The pin you entered is incorrect, please try again: ")
        }
    }
}

const withdraw = () => {
    let incorrect = true

    while (incorrect) {
        console.log("Current balance: " + loggedInUser[0].deposit)
        let withdrawAmount = input("Please enter the amount you would like to withdraw: ")

        if (withdrawAmount < loggedInUser[0].deposit) {
            incorrect = false
            let remainingBalance = loggedInUser[0].deposit - parseInt(withdrawAmount)
            let transaction = new Transaction(d.toString(), loggedInUser[0].deposit, remainingBalance)
            loggedInUser[0].deposit = remainingBalance
            loggedInUser[0].transactions.push(transaction);
            incorrect = false
        }

        else if (!withdrawAmount.match(/^\d +\.\d{ 0, 3}$/)) {
            console.log("Please enter withdraw amount in monetary format($00.00) ")
        }
        else if (loggedInUser[0].deposit - withdrawAmount < 0) {

            console.log("Insufficient funds. The amount you withdrew is greater than your current balance. Please try again.")

        }
    }
}

// let getDeposit = function () {
//     let correct = false;
//     let deposit;
//     while (!correct) {
//         deposit = input("Please select the amount you would like to deposit into this account($ 00.00): $")
//         if (deposit.match(/^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/)) {
//             correct = true;
//         } else {
//             console.log(`Please enter numbers only in monetary format.`)
//         }
//     }
//     return deposit
// }


const deposit = () => {
    let correct = false;
    while (!correct) {
        console.log("Current balance: " + loggedInUser[0].deposit)
        let depositAmount = input("Please enter the amount you would like to deposit: ")

        if (!depositAmount.match(/^\d+\.\d{0,3}$/)) {

            console.log("Please enter withdraw amount in monetary format($00.00): ")
        }


        else {

            if (depositAmount < 0) {
                console.log("You cannot deposit a negative amount. Please try again.")
            }
            else if (depositAmount > 0) {
                let updatedBalance = loggedInUser[0].deposit + parseInt(depositAmount)
                let transaction = new Transaction(d.toString(), loggedInUser[0].deposit, updatedBalance)
                loggedInUser[0].deposit = updatedBalance
                loggedInUser[0].transactions.push(transaction);
                correct = true

            }

        }
    }

}






