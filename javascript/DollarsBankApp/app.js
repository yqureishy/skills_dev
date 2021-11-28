
import ps from "prompt-sync";
const prompt = ps();

import { helloWorld, mainMenu } from "./src/functions.js";

mainMenu()
let choice = prompt("Enter Choice (1,2 or 3): ");

