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

export const newUser = () => {

    var name = getName()

    let address = input("Customer Address: ")

    let phoneNumber = getPhoneNumber()

    let userId = input("User Id: ")

    let password = getPassword()

    let deposit = getDeposit()



    let account = new Account(name, address, phoneNumber, userId, password, deposit)

    users.push(account);

}

export const printAccounts = () => {

    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }

}




var getPassword = function () {
    let correct = false;
    let password;
    while (!correct) {
        password = input("Password: ")
        if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            console.log(`Password must contain at least 6 characters, a number and a special character`)
        } else {
            correct = true;
        }
    }
    return password
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

