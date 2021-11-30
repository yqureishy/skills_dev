import { isAlpha } from "class-validator";
import ps from "prompt-sync";
import Account from "./account.js"
// const Account = require("./account.js")
const input = ps({ sigint: true });

let users = []

let loggedInUser = []

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

    var name = getName()

    let address = input("Customer Address: ")

    let phoneNumber = getPhoneNumber()

    let userId = input("User Id: ")

    let pin = getPin()

    let deposit = getDeposit()

    let account = new Account(name, address, phoneNumber, userId, pin, deposit)

    users.push(account);

    console.log(users[0].userId)

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

var getPhoneNumber = function () {
    let correct = false;
    let phoneNumber;
    while (!correct) {
        phoneNumber = input("Customer Contact Number: ");
        if (!phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
            console.log(`Phone Number must be in one of the following formats: \n(123) 456-7890\n(123)456 - 7890\n123 - 456 - 7890\n123.456.7890\n1234567890\n+ 31636363634\n075 - 63546725`)
        } else {
            correct = true;
        }
    }
    return phoneNumber
}

let getDeposit = function () {
    let correct = false;
    let deposit;
    while (!correct) {
        deposit = input("Please select the amount you would like to deposit into this account($): ")
        if (!deposit.match(/^\d*$/)) {
            console.log(`Please enter numbers only`)
        } else {
            correct = true;
        }

    }
    return deposit
}



export const printAccounts = () => {

    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }

}






