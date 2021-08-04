function fizzbuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return "FIZZ BUZZ"
    }
    else if (number % 3 == 0) {
        return "FIZZ"
    }
    else if (number % 5 == 0) {
        return "BUZZ"
    }
    else {
        return "Number is neither divisible by 3 nor 5!"
    }
}

console.log(fizzbuzz(90))