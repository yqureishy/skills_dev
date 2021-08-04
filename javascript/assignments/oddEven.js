// ODD OR EVEN //

function oddEven(number) {
    if (number % 2 == 0 && number > 0) {
        return "EVEN"
    }
    else if (number % 2 != 0 && number > 0) {
        return "ODD"
    }
    else if (number === 0) {
        return "Number is neither odd nor even"
    }
    else {
        "Please enter a whole, positive number"
    }
}

console.log(oddEven(14))

