
import ps from "prompt-sync";
import Account from "./src/account.js"
// const Account = require("./account.js")
const input = ps({ sigint: true });

import { mainMenu, newUser, printAccounts, login } from "./src/functions.js";



let choice = 0;

while (choice != 3) {
    try {

        mainMenu()
        choice = input("Enter Choice (1,2 or 3): ");

        switch (Number(choice)) {
            case 1: console.log("You chose 1!");
                newUser()
                printAccounts()
                break;
            case 2: login()
                break;
            case 3: console.log("You chose 3!");
                break;
        }

    } catch (error) {
        console.log(error)
    }


    console.log("\n\n");

};


