myNums = [1, 2, 4, 6, 8, 23, 43, 65, 76, 87, 45, 23, 7898]




function inArray(array, input) {
    for (let i = 0; i < array.length; i++) {
        if (input === array[i]) {
            return true
        }
    }
    return false
}

console.log(inArray(myNums, 7898))